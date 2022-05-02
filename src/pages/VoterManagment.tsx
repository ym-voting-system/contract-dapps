/*
 * React Utils*/
import { useEffect, useState } from "react";

/*
 * Mantine UI Library */
import { Button, Paper, Title } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";

/*YM Components */
import VotingInteraction from "@components/VotingInteraction";

/*
 * Wallet && Blockchain interaction */

import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { Voting } from "@utils/getContract";
import useVoting from "@hooks/useVoting";

function VoterManagment() {
  /* React */
  const [load, setLoad] = useState(false);

  /* Mantine*/
  const notifications = useNotifications();

  /*State*/
  const [register, setVoterValue] = useState("");
  const [whitelisted, setIsWhitelisted] = useState("");

  /* Web3 */
  const context = useWeb3React();
  const { active, library: provider } = context;
  const [contract, write] = useVoting();

  //setData on blockchain
  async function setVoter() {
    setLoad(true);
    try {
      write(
        contract?.addAddressWhitelist(register),
        "Updated Contract",
        "Add voter to white list",
        "Error adding Voter"
      );
      setVoterValue("");
      setLoad(false);
    } catch (error) {
      setLoad(false);
    }
  }

  async function isWhitelisted() {
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(Voting.address, Voting.abi, signer);
      try {
        const transaction = await contract.isWhitelisted(whitelisted);
        const { isRegistered } = transaction;
        const color = isRegistered ? "green" : "orange";
        notifications.showNotification({
          id: "isWhitelisted",
          title: "Adress is whitelisted",
          color: color,
          message: `${whitelisted} is ${
            isRegistered ? "whitelisted" : "not whitelisted"
          }`,
        });
      } catch (e) {
        const error: any = e as Error;
        const message = error.data ? error.data.message : error;
        notifications.showNotification({
          id: "ErorrVoterIsWhitelisted",
          title: "Erorr Voter Is Whitelisted",
          color: "red",
          message: `${message}`,
        });
      }
    }
  }

  /**
   *
   */

  function handleDeployContract(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    async function deployVotingContract(signer: Signer): Promise<void> {
      const contract = new ethers.ContractFactory(
        Voting.abi,
        Voting.bytecode,
        signer
      );

      try {
        const votingContract = await contract.deploy();

        await votingContract.deployed();

        window.alert(`Voting deployed to: ${votingContract.address}`);
      } catch (error: any) {
        window.alert(
          "Error!" + (error && error.message ? `\n\n${error.message}` : "")
        );
      }
    }
    const signer = provider.getSigner();
    deployVotingContract(signer);
  }
  return (
    <div>
      <Paper
        shadow="xs"
        p="md"
        radius={0}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "strecht",
          margin: "0 auto",
          maxWidth: "500px",
        }}
      >
        <Title
          order={2}
          style={{
            marginBottom: "10px",
          }}
        >
          Voters Management
        </Title>
        <Button onClick={handleDeployContract}>deploy</Button>
        <VotingInteraction
          state={{ register, whitelisted }}
          setState={{ setVoterValue, setIsWhitelisted }}
          web3Interaction={{ setVoter, isWhitelisted }}
          load={load}
        />
      </Paper>
    </div>
  );
}

export default VoterManagment;
