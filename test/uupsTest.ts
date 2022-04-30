import { expect } from "chai";
import "@nomiclabs/hardhat-ethers";
import { ethers, upgrades } from "hardhat";

describe('MyContract', function () {
  it('deploys', async function () {

	const [addr0, addr1, addr2] = await ethers.getSigners();
	const MyContractV1 = await ethers.getContractFactory('MyContract');
	const addresses = ["0xbDA5747bFD65F08deb54cb465eB87D40e51B197E","0xdD2FD4581271e230360230F9337D5c0430Bf44C0","0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"];

	//addr0
	const myProxyV1 = await upgrades.deployProxy(MyContractV1, [addresses,10], { kind: 'uups' });
	await myProxyV1.deployed();
	
	console.log("myProxyV1.address : ",myProxyV1.address);
	console.log("myProxyV1._deployed : ",await myProxyV1.VERSION());
		
	expect(await myProxyV1.confirmationNeeded()).to.equal(10);
	expect(await myProxyV1.owner()).to.equal(addr0.address);
	expect(await myProxyV1.owners(1)).to.equal("0xdD2FD4581271e230360230F9337D5c0430Bf44C0");
	

	//addr1
	//await myProxyV1.connect(addr1).

  });
});