import { useEffect, useRef, useState } from "react";
import { Button, Select, SelectProps } from "@mantine/core";
import { SwitchVertical } from "tabler-icons-react";
import { SwitchProvider } from "@utils/connectors";

import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import { UserRejectedRequestError as UserRejectedRequestErrorWalletConnect } from "@web3-react/walletconnect-connector";
import { useNotifications } from "@mantine/notifications";

interface INetwork {
  chainId: string; //in hexadecimals
  rpcUrls: Array<string>;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls: Array<string>;
}

function getErrorMessage(error: Error | undefined) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected ||
    error instanceof UserRejectedRequestErrorWalletConnect
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    return "An unknown error occurred. Check the console for more details.";
  }
}

function SwitchNetwork() {
  const [selectValue, setSelectValue] = useState<string | null>();
  const notifications = useNotifications();
  const context = useWeb3React();
  const { active, library: provider, chainId, error } = context;
  const select = useRef() as React.MutableRefObject<HTMLInputElement>;

  //Select default network
  useEffect(() => {
    setSelectValue(chainId?.toString());
  }, [chainId]);

  useEffect(() => {
    if (!!error) {
      notifications.showNotification({
        id: "Network Error",
        color: "red",
        message: `Error with network : ${getErrorMessage(error)}`,
        autoClose: true,
      });
    }
  }, [chainId]);

  const SwitchOrAdd = (network: INetwork) => {
    try {
      window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: network.chainId }],
      });
    } catch (error) {
      window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [network],
      });
    }
  };

  function changeNetwork() {
    const {
      mainnet,
      ropsten,
      rinkeby,
      kovan,
      goerli,
      mumbai,
      polygon,
      hardhat,
      ganache,
    } = SwitchProvider;
    const chain = select.current?.value;
    switch (chain) {
      case "Ethereum":
        SwitchOrAdd(mainnet);
        break;
      case "Ropsten":
        SwitchOrAdd(rinkeby);
        break;
      case "Rinkeby":
        SwitchOrAdd(ropsten);
        break;
      case "Goerli":
        SwitchOrAdd(goerli);
        break;
      case "Kovan":
        SwitchOrAdd(kovan);
        break;
      case "Mumbai":
        SwitchOrAdd(mumbai);
        break;
      case "Polygon":
        SwitchOrAdd(polygon);
        break;
      case "Hardhat":
        SwitchOrAdd(hardhat);
        break;
      case "Ganache":
        SwitchOrAdd(ganache);
        break;
      default:
        notifications.showNotification({
          id: "Switch Error",
          color: "red",
          message: `Your ${
            provider ? "connect to " + provider._network.name : " not connected"
          }.`,
          autoClose: true,
        });
    }
  }

  const style = {
    display: "flex",
    gap: "10px",
    fontSize: 200,
  };

  return (
    <div style={style}>
      {active && (
        <>
          <Button
            leftIcon={<SwitchVertical />}
            uppercase
            variant="outline"
            color="yellow"
            onClick={changeNetwork}
          >
            Switch Network
          </Button>
        </>
      )}
      <Select
        style={{ maxWidth: "110px" }}
        placeholder="Select Network"
        ref={select}
        value={selectValue}
        searchable
        nothingFound="No network"
        onChange={setSelectValue}
        data={[
          { value: "1", label: "Ethereum", group: "Mainnet" },
          { value: "3", label: "Ropsten", group: "Testnet" },
          { value: "4", label: "Rinkeby", group: "Testnet" },
          { value: "5", label: "Goerli", group: "Testnet" },
          { value: "42", label: "Kovan", group: "Testnet" },
          { value: "80001", label: "Mumbai", group: "Testnet" },
          { value: "137", label: "Polygon", group: "Mainnet" },
          { value: "31337", label: "Hardhat", group: "Local" },
          { value: "1337", label: "Ganache", group: "Local" },
        ]}
      />
    </div>
  );
}

export default SwitchNetwork;
