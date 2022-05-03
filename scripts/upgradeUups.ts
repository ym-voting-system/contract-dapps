// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import "@nomiclabs/hardhat-ethers";
import { ethers, upgrades } from "hardhat";

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  //0xe7f1725e7734ce288f8367e1bb143e90bb3f0512 contract
  //0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0 proxy
  	//0xcf7ed3acca5a467e9e704c703e8d87f634fb0fc9 2nd proxy  

  // We get the contract to deploy
  const MyContractV2 = await ethers.getContractFactory('MyContractV2');
  const PROXY = "0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0";
  
  
  


	//addr0
	const myProxyV2 = await upgrades.upgradeProxy(PROXY, MyContractV2);
	await myProxyV2.deployed();
	console.log("MyContract deployed to :"+myProxyV2.address);
	console.log("Implementation (main contract)",await upgrades.erc1967.getImplementationAddress(myProxyV2.address));	


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
