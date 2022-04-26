/*
 * React Utils*/
import { useEffect, useState } from "react";

/*
 * Mantine UI Library */
import { Button, Group, Text, TextInput, Title } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import {
  Send,
  CurrencyEthereum,
  Database,
  Checklist,
} from "tabler-icons-react";

/*
 * Wallet && Blockchain interaction */
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Voting from "../artifacts/contracts/Voting.sol/Voting.json";
const VotingAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function VotingInteraction() {
  /* React */
  const [load, setLoad] = useState(false);

  /* Mantine*/
  const notifications = useNotifications();

  /* Web3 */
  const context = useWeb3React();
  const { active, library: provider } = context;
  const [register, setVoterValue] = useState("");
  const [whitelisted, setIsWhitelisted] = useState("");

  //setData on blockchain
  async function setVoter() {
    setLoad(true);
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(VotingAddress, Voting.abi, signer);
      try {
        const transaction = await contract.addAddressWhitelist(register);
        await transaction.wait();
        notifications.showNotification({
          id: "UpdatedContract",
          title: "Updated Contract",
          color: "green",
          message: "Add voter to white list",
          autoClose: false,
        });
        setVoterValue("");
        setLoad(false);
      } catch (e) {
        const error: any = e as Error;
        setLoad(false);
        const message = error.data ? error.data.message : e;
        notifications.showNotification({
          id: "ErorrSetVoterFetch",
          title: "Error adding Voter",
          color: "red",
          message: `${message}`,
        });
      }
    }
  }

  async function isWhitelisted() {
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(VotingAddress, Voting.abi, signer);
      try {
        const transaction = await contract.isWhitelisted(whitelisted);
        const { isRegistered } = transaction;
        console.log(isRegistered);
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
        console.log(error.message);
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

  return (
    <>
      <form>
        <Text
          size="lg"
          weight={700}
          underline
          transform="capitalize"
          variant="gradient"
          gradient={{ from: "cyan", to: "blue", deg: 138 }}
        >
          {register}
        </Text>
        <TextInput
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
          icon={<Send />}
          rightSection={<CurrencyEthereum />}
          label="Add voter to white list"
          placeholder="Voter adress"
          {...(!register && { error: "The field is empty" })}
          required
          value={register}
          onChange={(event) => setVoterValue(event.currentTarget.value)}
        />
        <Group position="right" mt="md">
          <Button
            onClick={setVoter}
            leftIcon={<Database size={14} />}
            {...(load && { loading: true })}
            {...(!register && { disabled: true })}
          >
            Add Voters
          </Button>
        </Group>
      </form>
      <form style={{ marginTop: "20px" }}>
        <TextInput
          style={{
            marginBottom: "20px",
            width: "100%",
          }}
          icon={<Send />}
          rightSection={<CurrencyEthereum />}
          label="Check if adress is whitelisted"
          placeholder="Voter adress"
          {...(!whitelisted && { error: "The field is empty" })}
          required
          value={whitelisted}
          onChange={(event) => setIsWhitelisted(event.currentTarget.value)}
        />
        <Group position="right" mt="md">
          <Button
            onClick={isWhitelisted}
            leftIcon={<Checklist size={14} />}
            {...(!whitelisted && { disabled: true })}
          >
            Check
          </Button>
        </Group>
      </form>
    </>
  );
}

export default VotingInteraction;
