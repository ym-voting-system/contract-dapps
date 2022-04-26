import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const Voting = await ethers.getContractFactory("Voting");

  //Instance of Voting contract
  const voting = await Voting.deploy();

  //waiting of contract deployment
  await voting.deployed();

  console.log("Voting deployed to:", voting.address);
};
export default func;
