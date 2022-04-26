/*
 * React Utils*/
import { useEffect, useState } from "react";

/*
 * Mantine UI Library */
import { Button, Text, TextInput, Title } from "@mantine/core";
import { hideNotification, useNotifications } from "@mantine/notifications";
import { Send, CurrencyEthereum, Database } from "tabler-icons-react";

/*
 * Wallet && Blockchain interaction */
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import Greeter from "../artifacts/contracts/Greeter.sol/Greeter.json";
const greeterAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

function GreeterInteraction() {
  const context = useWeb3React();
  const { active } = context;

  const notifications = useNotifications();

  useEffect(() => {
    fetchGreeting();
    return () => setGreetingValue(null);
  }, [active]);

  /* Contract Valeue */
  const [greeting, setGreetingValue] = useState(null);
  const [load, setLoad] = useState(false);

  //Get data of blockchain
  async function fetchGreeting() {
    if (active) {
      //Create a new provider with ether library
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      //Create a new instance of contract (adress contract, abi contract && provider)
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        const data = await contract.greet();
        setGreetingValue(data);
        hideNotification("erorrFetchGreeting");
        notifications.showNotification({
          id: "RetrievingMessage",
          title: "Retrieving Message",
          color: "green",
          message: `Retrieving the Greeter.sol smart contract greeting message : ${data}`,
        });
      } catch (e) {
        //const message =
        notifications.showNotification({
          id: "erorrFetchGreeting",
          title: "Erorr Fetching Greeter Data",
          color: "red",
          message: `Unable to call the greet() function of the greeter contract, try "npx hardhat node or npx hardhat run scripts/deploy.ts --network localhost" : ${e}`,
          autoClose: false,
        });
      }
    }
  }

  //setData on blockchain
  async function setGreeting() {
    setLoad(true);
    if (active) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(greeting);
      setGreetingValue(null);
      try {
        await transaction.wait();
        await fetchGreeting();
        notifications.showNotification({
          id: "UpdatedContract",
          title: "Updated Contract",
          color: "green",
          message:
            "The contract Greeter.sol has been updated with a new value: ",
          autoClose: false,
        });
        setLoad(false);
      } catch (e) {
        notifications.showNotification({
          id: "ErorrSetGreetingFetch",
          title: "Erorr Set Greeting Data",
          color: "red",
          message: `Unable to call contract to set transaction : setGreeting : ${e}`,
          autoClose: false,
        });
      }
    }
  }

  return (
    <div>
      <Text
        size="lg"
        weight={700}
        underline
        transform="capitalize"
        variant="gradient"
        gradient={{ from: "cyan", to: "blue", deg: 138 }}
      >
        {greeting}
      </Text>

      <TextInput
        style={{
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
        icon={<Send />}
        rightSection={<CurrencyEthereum />}
        label="Greeting"
        placeholder="Your greeting"
        {...(!greeting && { error: "The field is empty" })}
        required
        value={greeting}
        onChange={(event) => setGreetingValue(event.currentTarget.value)}
      />
      <Button
        onClick={setGreeting}
        leftIcon={<Database size={14} />}
        {...(load && { loading: true })}
        {...(!greeting && { disabled: true })}
      >
        Send to blockchain
      </Button>
    </div>
  );
}

export default GreeterInteraction;
