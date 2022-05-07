import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { useNotifications } from "@mantine/notifications";
import { Voting } from "@utils/getContract";

function useVoting() {
    /**Mantine */
    const notifications = useNotifications();

    /*  
    const [networkName, setNetworkName] = useState<string | null>("unknown");
    const [contractAddress, setContractAddress] = useState<string>(""); 
    */
    const [contract, setContract] = useState<ethers.Contract>();
    const context = useWeb3React();
    const { active, library: provider } = context;

    /* setNetworkName connection on load */
    /*   useEffect(() => {
        (async function () {
            if (active) {
                await setNetworkName(provider._network.name);
            }
        });
    }, [chainId]);

    useEffect(() => {
        console.log(networkName);
        if (active) {
            if (networkName && networkName == "mainnet") {
                setContractAddress(Voting.mainnet);
            } else if (networkName && networkName == "rinkeby") {
                setContractAddress(Voting.rinkeby);
            } else if (networkName && networkName == "hardhat") {
                setContractAddress(Voting.hardhat);
            } else {
                notifications.showNotification({
                    id: `ErorrProviderContractAddress`,
                    title: `Error provider contract address`,
                    color: "red",
                    message: `Error to get contract address`,
                });
            }
        }
    }, [networkName]);
*/
    useEffect(() => {
        (async function () {
            const launch = async () => {
                if (active) {
                    const signer = provider.getSigner();
                    const instanceContract = new ethers.Contract(
                        Voting.hardhat,
                        Voting.abi,
                        signer
                    );
                    setContract(instanceContract);
                }
            };
            launch();
        })();
    }, [provider]);

    async function write(
        contract: Promise<any>,
        name: String,
        message: string,
        errorMsg: string = ""
    ): Promise<any> {
        const id = name.split(" ").join("");
        const title = name;
        try {
            const transaction = await contract;
            await transaction.wait();
            notifications.showNotification({
                id,
                title,
                color: "green",
                message,
                autoClose: false,
            });
        } catch (e) {
            const error: any = e as Error;
            const message = error.data ? error.data.message : e;
            notifications.showNotification({
                id: `Erorr${name}`,
                title: `Error ${name}`,
                color: "red",
                message: `${errorMsg} ${message}`,
            });
            return error;
        }
    }

    async function read(
        contract: Promise<any>,
        name: String,
        message: string,
        errorMsg: string = ""
    ): Promise<any> {
        const id = name.split(" ").join("");
        const title = name;
        let data: Promise<ethers.Contract>;
        try {
            data = await contract;
            notifications.showNotification({
                id,
                title,
                color: "green",
                message: `${message}: ${data}`,
            });
        } catch (e) {
            const error: any = e as Error;
            const message = error.data ? error.data.message : e;
            notifications.showNotification({
                id: `Erorr${name}`,
                title: `Error ${name}`,
                color: "red",
                message: `${errorMsg} ${message} `,
            });
            return error;
        }
        return data;
    }

    return [contract, write, read] as const; //const assertions
}

export default useVoting;
