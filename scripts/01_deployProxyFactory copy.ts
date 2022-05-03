import { ethers } from "hardhat";

async function main() {
	//First we try to deploy the factory (and by the code in the constructor the UUPS contract called MyContract)
  	const MyProxyFactory = await ethers.getContractFactory("MyProxyFactory");
  	const proxyFactory = await MyProxyFactory.deploy();
  	await proxyFactory.deployed();

	console.log("proxyFactory deployed to: ", proxyFactory.address);
	console.log("Imprementation of MyContract: ", proxyFactory.logic());

	//Second we try to deploy a proxy of "MyContract"
	const addresses = ["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];
	const confirmation = 2;
	const proxyCreated = await proxyFactory.createProxy(addresses,confirmation);
	console.log("proxyCreated: ", proxyCreated.address);

	//Third : test to get from the proxy state the value of owners 1 who should be "0xdD2FD4581271e230360230F9337D5c0430Bf44C0"
	console.log("Version : ",await proxyCreated.owners(1));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
