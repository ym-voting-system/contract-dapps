import {
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Button,
  Menu,
  Divider,
  ActionIcon,
} from "@mantine/core";

import { useEffect, useState } from "react";

import LightDarkButton from "@components/LightDarkButton";
import { Link } from "react-router-dom";
import { useNotifications } from "@mantine/notifications";
import {
  Alien,
  Network,
  Copy,
  CurrencyEthereum,
  ArrowBarToRight,
  BrandGithub,
} from "tabler-icons-react";

/*
 * Wallet && Blockchain interaction */
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { injected } from "@utils/connectors";
import SwitchNetwork from "@components/SwitchNetwork";

function headerLayout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  const notifications = useNotifications();

  /**
   * * Blockchain */

  // Connect to wallet
  const context = useWeb3React();
  const {
    library: provider,
    chainId,
    account,
    activate,
    deactivate,
    active,
  } = context;

  /* Contract Value */
  const [networkName, setNetworkName] = useState<string | null>("unknown");
  const [providerName, setProviderName] = useState(null);
  // const [Workflow, setWorkflowStatus] = useState<Array<object>>([]);

  useEffect(() => {
    connectWalletOnPageLoad();
  }, [chainId]);

  /*
  useEffect(() => {
    WorkflowStatus();
    return () => setWorkflowStatus([]);
  }, [active]);
*/
  useEffect(() => {
    try {
      if (active) {
        setProviderName(provider.connection.url);
      }
    } catch (e) {
      notifications.showNotification({
        id: "Provider not supported",
        title: "Erorr fetching Provider ",
        color: "red",
        message: `This provider is not supported" : ${e}`,
        autoClose: false,
      });
    }
    return () => setProviderName(null);
  }, [chainId]);

  async function connect() {
    try {
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (e) {
      notifications.showNotification({
        id: "Error to connect wallet ",
        color: "red",
        message: `activate (Error with injected wallet) : ${e}`,
        autoClose: false,
      });
    }
  }

  const connectWalletOnPageLoad = async () => {
    if (localStorage?.getItem("isWalletConnected") === "true") {
      try {
        await activate(injected);
        if (active) setNetworkName(provider._network.name);
      } catch (e) {
        notifications.showNotification({
          id: "Error to connect wallet ",
          color: "red",
          message: `UseEffect (Error with injected wallet) : ${e}`,
          autoClose: false,
        });
      }
    }
  };

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

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (e) {
      notifications.showNotification({
        id: "Error to disconnect wallet ",
        color: "red",
        message: `Error with injected wallet : ${e}`,
        autoClose: false,
      });
    }
  }

  function copyAccount(adress: string | null | undefined) {
    notifications.showNotification({
      id: "Copy",
      color: "green",
      message: `The account address has been copied : ${adress}`,
    });
    return navigator.clipboard.writeText(adress || "");
  }

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
        {!active && (
          <Button
            leftIcon={<CurrencyEthereum />}
            variant="gradient"
            uppercase
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={connect}
          >
            Connect wallet
          </Button>
        )}
        {active && providerName && (
          <>
            <Menu
              control={
                <Button
                  styles={(theme) => ({
                    root: {
                      textOverflow: "ellipsis",
                      maxWidth: "190px",
                    },
                  })}
                  leftIcon={<Alien />}
                  variant="outline"
                  uppercase
                  type="button"
                >
                  {account === null
                    ? "-"
                    : account
                    ? `${account.substring(0, 6)}...${account.substring(
                        account.length - 4
                      )}`
                    : ""}
                </Button>
              }
            >
              <Menu.Label>
                Wallet :{" "}
                <span style={{ textTransform: "capitalize" }}>
                  {providerName}
                </span>
              </Menu.Label>
              <Menu.Item
                onClick={() => {
                  copyAccount(account);
                }}
                icon={<Network size={14} />}
              >
                Network :{" "}
                <b>
                  {" "}
                  {networkName} ({chainId})
                </b>
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  copyAccount(account);
                }}
                icon={<Copy size={14} />}
              >
                Copy Adress
              </Menu.Item>
              <Divider />
              <Menu.Item
                onClick={() => {
                  disconnect();
                }}
                color="red"
                icon={<ArrowBarToRight size={14} />}
              >
                Disconnect Wallet
              </Menu.Item>
            </Menu>
          </>
        )}
        <SwitchNetwork />
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
