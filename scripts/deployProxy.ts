import { Interface } from "ethers/lib/utils";
import { ethers } from "hardhat";
import MyProxy from "../src/artifacts/contracts/MyProxy.sol/MyProxy.json";

async function main() {
   	const [addr0, addr1, addr2] = await ethers.getSigners();
	let implementation = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

	// Create an instance of a Contract Factory
	let factory = new ethers.ContractFactory(MyProxy.abi, MyProxy.bytecode, addr2);
	const addresses = ["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];
	
	let proxy = await factory.deploy(implementation,addresses,2);

	//const iface = new Interface(MyProxy.abi);
	//console.log(iface);

	//waiting of contract deployment
  	await proxy.deployed();

  	console.log("MyProxy deployed to:", proxy.address);
	console.log("MyProxy owner :", proxy.owner());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
