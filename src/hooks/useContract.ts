import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";
import { useNotifications } from "@mantine/notifications";
const VotingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function useContract() {
  /**Mantine */
  const notifications = useNotifications();

  const [contract, setContract] = useState<ethers.Contract>();
  const context = useWeb3React();
  const { active, library: provider } = context;

  useEffect(() => {
    (async function () {
      const test = async () => {
        if (active) {
          const signer = provider.getSigner();
          const instanceContract = new ethers.Contract(
            VotingAddress,
            Voting.abi,
            signer
          );
          setContract(instanceContract);
        }
      };
      test();
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
      //setProposals("");
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

  return [contract, write] as const; //const assertions
}

export default useContract;
