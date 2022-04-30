// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "./MyContract.sol";

contract MyContractV2 is MyContract  {
	function getConfX2() public view returns(uint8){
		return confirmationNeeded*2;
	}
}
