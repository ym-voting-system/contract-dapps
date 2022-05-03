import { ethers } from "hardhat";

async function main() {
  	const MyProxyFactory = await ethers.getContractFactory("MyProxyFactory");
  	const proxyFactory = await MyProxyFactory.deploy();
  	await proxyFactory.deployed();
	console.log("proxyFactory deployed to:", proxyFactory.address);

	console.log("Imprementation of MyContract", proxyFactory.logic());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
