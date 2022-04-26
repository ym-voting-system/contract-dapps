import { useEffect, useState } from "react";
import { hideNotification, useNotifications } from "@mantine/notifications";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import DataVoting from "../artifacts/contracts/Voting.sol/Voting.json";
const VotingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function useVoting() {
  const [Voting, setVoting] = useState({});
  const context = useWeb3React();
  const { active } = context;

  const notifications = useNotifications();

  //Get data of blockchain

  useEffect(() => {
    async function fetchContract() {
      if (active) {
        //Create a new provider with ether library
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        //Create a new instance of contract (adress contract, abi contract && provider)
        const contract = new ethers.Contract(
          VotingAddress,
          DataVoting.abi,
          provider
        );
        try {
          const res = await contract;
          setVoting(res);
          hideNotification("erorrfetchRegister");
          notifications.showNotification({
            id: "RetrievingMessage",
            title: "Connection contract",
            color: "green",
            message: `The connection with Voting contract is established : ${res}`,
          });
        } catch (e) {
          //const message =
          notifications.showNotification({
            id: "erorrfetchRegister",
            title: "Unable to call the contract",
            color: "red",
            message: `Unable to call the Voting Contract" : ${e}`,
            autoClose: false,
          });
        }
      }
    }
    fetchContract();
  }, [active]);

  return [Voting];
}

export default useVoting;
