// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract CommownSW is Initializable, UUPSUpgradeable, OwnableUpgradeable  {

	event WalletCreated(address indexed creator, address[] owners, uint256 confirmationNeeded);
	event Deposit(address indexed sender, uint256 amount, uint256 balance);

    //Constant can be inizialized even with Proxies
    string public constant VERSION = "0.0.1";

	struct Pocket {
		uint256 pocketID; //Pocket ID
		uint256 pocketEndTS; //End timestamp for adding shares to the pocket
		uint256 totalShares; //Total of shares to reach
		mapping(address => uint256) sharePerUser; //Share per user
	}
	Pocket[] public pockets;


	//Component of a CommownWallet : List of owners of the contract, only those can call some of the functions
	address[] public owners; 
	mapping(address => bool) public isOwner;
	uint8 public confirmationNeeded;

	mapping(address => uint256) public balancePerUser; //Balance in Wei per User
	
	
	
	uint256 public totalAlreadyWithdrawed; //Total of ethers already withdrawed
	mapping(address => uint256) public withdrawPerUser; //Amount of withdrawed ethers per user

	modifier isCommownOwner(address _sender){
		require(isOwner[_sender],"not an owner");
		_;
	}

    /// @dev : function initialize
    function initialize(address[] memory _owners, uint8 _confirmationNeeded) initializer public {
		require(_owners.length > 0, "owners required");
		require(_confirmationNeeded > 0 && _confirmationNeeded<= _owners.length, "confirmation number invalid");
		
		__Ownable_init();
        __UUPSUpgradeable_init();

		for(uint i;i<_owners.length; i++){
			require(_owners[i] != address(0),"owner is address(0)");
			require(!isOwner[_owners[i]],"owner is already listed");

			owners.push(_owners[i]);
			isOwner[_owners[i]] = true;
		}

		confirmationNeeded = _confirmationNeeded;
		emit WalletCreated(msg.sender,_owners,_confirmationNeeded);
	}

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

	//Todo : Emit event receive Eth
	//Owners can send ethers, a contract, a sell can send ethers...
	receive() external payable isCommownOwner(msg.sender) {
		balancePerUser[msg.sender] += msg.value;
		emit Deposit(msg.sender, msg.value, address(this).balance);
	}

	/* function createPocket(uint256 _ts, uint256 _amount) pure public isCommownOwner(msg.sender){
		uint256 _pocketID = pockets.length;
		pockets.push(Pocket({pocketID: _pocketID, pocketEndTS: _ts, totalShares: _amount, executed: false, numConfirmations: 0}));

		mapping(address => uint256) sharePerUser;
		emit SubmitTransaction(msg.sender, txIndex, _to, _value, _data);
	} */


	//Todo : Emit event withdrawal
	//Todo : To Test 
	/* function withdraw() public isCommownOwner(msg.sender){
		
	
		uint256 toPay = ((address(this).balance + totalAlreadyWithdrawed) * sharePerUser[msg.sender]) / totalShares - withdrawPerUser[msg.sender];
		require(toPay>0,"Nothing to pay");

		totalAlreadyWithdrawed += toPay;
		withdrawPerUser[msg.sender] += toPay;

		(bool success,) = payable(msg.sender).call{value:toPay}("");
		require(success,"transaction failed");
	} */
}