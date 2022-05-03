// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract MyContract is Initializable, UUPSUpgradeable, OwnableUpgradeable  {

    //Constant can be inizialized even with Proxies
    string public constant VERSION = "0.0.1";
	uint8 public confirmationNeeded;
	address[] public owners; 
	
    function initialize(address[] memory _owners, uint8 _confirmationNeeded) public initializer {
        __Ownable_init();
        __UUPSUpgradeable_init();
		confirmationNeeded = _confirmationNeeded;
		for(uint i;i<_owners.length; i++){
			console.log(_owners[i]);
			owners.push(_owners[i]);
		}
	}

    /// @custom:oz-upgrades-unsafe-allow constructor
    constructor() initializer {}

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
