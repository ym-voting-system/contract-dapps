import VotingAbi from "@contract/Voting.sol/Voting.json";
import GreeterAbi from "@contract/Greeter.sol/Greeter.json";

interface IContract {
  address: string;
  abi: any;
}

export const Voting: IContract = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: VotingAbi.abi,
};

export const Greeter: IContract = {
  address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  abi: GreeterAbi.abi,
};
