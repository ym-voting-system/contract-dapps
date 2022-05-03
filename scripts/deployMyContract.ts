import { ethers } from "hardhat";
import MyContract from "../src/artifacts/contracts/MyContract.sol/MyContract.json";

async function main() {
   	const [addr0, addr1, addr2] = await ethers.getSigners();

	// Create an instance of a Contract Factory
	let factory = new ethers.ContractFactory(MyContract.abi, MyContract.bytecode, addr2);
	const addresses = ["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];

	// Notice we pass in "Hello World" as the parameter to the constructor
	let contract = await factory.deploy("Hello World");

  	//waiting of contract deployment
  	await contract.deployed();

  	console.log("MyContract deployed to:", contract.address);
	console.log("MyContract owner :", contract.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
