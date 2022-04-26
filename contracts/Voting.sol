//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import "./Admin.sol";
import "./Users.sol";

contract Voting is Admin, Users {
    function getWinner() public view returns (string memory) {
        return proposals[winningProposalId].description;
    }
}
