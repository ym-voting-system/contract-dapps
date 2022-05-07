import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";

import { useEffect, useState } from "react";

import LightDarkButton from "@components/LightDarkButton";
import { Link } from "react-router-dom";
import { useNotifications } from "@mantine/notifications";
import { BrandGithub } from "tabler-icons-react";

/*
 * Wallet && Blockchain interaction */
import { useWeb3React } from "@web3-react/core";
import InjectedWalletConnection from "@components/InjectedWalletConnection";

function headerLayout() {
  /* Mantine Value */
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const notifications = useNotifications();

  /*
   * * Blockchain
   */
  // Web3 react Value
  const context = useWeb3React();
  const {
    library: provider,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = context;

  // const [Workflow, setWorkflowStatus] = useState<Array<object>>([]);

  /*
  useEffect(() => {
    WorkflowStatus();
    return () => setWorkflowStatus([]);
  }, [active]);
*/

  /*
  async function WorkflowStatus() {
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(VotingAddress, Voting.abi, signer);
      try {
        const workflow = await contract.queryFilter("TrustedWorkflowStatusChange");
        console.log(workflow[0]);
        //setWorkflowStatus(workflow);
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
  */

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      height={70}
      p="md"
    >
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o) => !o)}
          size="sm"
          color={theme.colors.gray[6]}
          mr="xl"
        />
      </MediaQuery>
      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Text
          variant="gradient"
          gradient={{ from: "indigo", to: "cyan", deg: 45 }}
          size="lg"
          transform="uppercase"
        >
          React Voting System
        </Text>
      </MediaQuery>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <Text
          transform="uppercase"
          color="gray"
          weight={500}
          component={Link}
          variant="link"
          to="/"
        >
          Home
        </Text>
        <Text
          transform="uppercase"
          color="gray"
          weight={500}
          component={Link}
          variant="link"
          to="/accounts"
        >
          Account
        </Text>
        <Text>Workflow : Inconnue</Text>

        <InjectedWalletConnection />
        <ActionIcon
          component="a"
          href="https://github.com/YM-Voting-System/react-interface"
          variant="outline"
          target="_blank"
        >
          <BrandGithub size={18} />
        </ActionIcon>
        <LightDarkButton />
      </div>
    </Header>
  );
}

export default headerLayout;
