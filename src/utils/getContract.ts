import VotingArtifacts from "@contract/Voting.sol/Voting.json";
import GreeterAbi from "@contract/Greeter.sol/Greeter.json";

interface IContract {
  address: string;
  abi: any;
  bytecode: any;
}

//0x5FbDB2315678afecb367f032d93F642f64180aa3 Hardhat
//0x5FbDB2315678afecb367f032d93F642f64180aa3 Rinkeby

//Adress Contract Proxy (Shared Wallet) => owner du contract


//1) User => Créer un shared wallet
	// MyProxyFactory = await ethers.getContractFactory("MyProxyFactory"); ==> Deploy par l'équipe (constructeur de cette factory : new CommownSharedWallet())
  
	// MyProxyFactory.createProxy(owners,nb de confirmation); ==> Déployer un proxy pour les utilisateurs de ce shared wallet
//2) User =>
	//MyProxyFactory pour récupérer l'adresse du proxy créé à l'étape 1
		//MyProxyFactory = await ethers.getContractFactory("MyProxyFactory"); //Contrat de l'équipe
		
		//On récupère l'adresse du proxy de l'utilisateur connecté
		//const proxyAddressOfUser = await proxyFactory.commownProxiesPerUser("0xbDA5747bFD65F08deb54cb465eB87D40e51B197E",0);
		
		//Avec cette addresse ET le CommownSharedWallet (Logic/Implementation)
		//const CommownSharedWallet = await ethers.getContractFactory("CommownSharedWallet");
		//const contract = await CommownSharedWallet.attach(proxyAddressOfUser);
	//contract.getBalance();
export const MyProxyFactory: IContract = {
  address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
  abi: VotingArtifacts.abi,
  bytecode: VotingArtifacts.bytecode,
};

export const Greeter: IContract = {
  address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
  abi: GreeterAbi.abi,
  bytecode: GreeterAbi.bytecode,
};
