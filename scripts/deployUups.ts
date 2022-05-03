import "@nomiclabs/hardhat-ethers";
import { ethers, upgrades } from "hardhat";

async function main() {
  	// We get the contract to deploy
	const MyContractV1 = await ethers.getContractFactory('MyContract');
	const addresses = ["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];

	const myProxyV1 = await upgrades.deployProxy(MyContractV1, [addresses,2], { kind: 'uups' });
	await myProxyV1.deployed();
	console.log("MyContract deployed to :"+myProxyV1.address);
	console.log("Implementation (main contract)",await upgrades.erc1967.getImplementationAddress(myProxyV1.address));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
