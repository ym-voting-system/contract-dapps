import VotingArtifacts from "@contract/Voting.sol/Voting.json";
import CommownSWProxyFactoryArtifacts from "@contract/CommownSWProxyFactory.sol/CommownSWProxyFactory.json";
import GreeterArtifacts from "@contract/Greeter.sol/Greeter.json";

interface IContract {
  hardhat: string;
  rinkeby: string;
  mainnet: string;
  abi: any;
  bytecode: any;
}

export const CommownSWProxyFactory: IContract = {
  hardhat: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  rinkeby: "",
  mainnet: "",
  abi: CommownSWProxyFactoryArtifacts.abi,
  bytecode: CommownSWProxyFactoryArtifacts.bytecode,
};

export const Voting: IContract = {
  hardhat: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  rinkeby: "0x609AC9f984066005a540d3f067Bd675a7a64C0Bd",
  mainnet: "",
  abi: VotingArtifacts.abi,
  bytecode: VotingArtifacts.bytecode,
};

export const Greeter: IContract = {
  hardhat: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  rinkeby: "",
  mainnet: "",
  abi: GreeterArtifacts.abi,
  bytecode: GreeterArtifacts.bytecode,
};
