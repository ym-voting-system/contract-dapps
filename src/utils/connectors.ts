import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/61778f8337ab4ddab531940abe721ab9",
  4: "https://rinkeby.infura.io/v3/61778f8337ab4ddab531940abe721ab9",
};

/** Browser Extension/dApp Browser */
/**
 * 1 : Mainnet
 * 3 : Ropsten
 * 4 : Rinkeby
 * 5 :  Gôrli
 * 42 : Kovan
 * 80001 : Mumbai (Polygon Testnet)
 * 137 : Polygon Mainnet
 * 1337 : Ganache
 * 31337 : Hardhat
 */
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 137, 1337, 31337],
});

/**QR Code */
export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});
