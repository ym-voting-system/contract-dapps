//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.13;

import "hardhat/console.sol";

contract Greeter {
    string private greeting;
    uint8 public x;

    constructor(string memory _greeting, uint8 _x) {
        console.log("Deploying a Greeter with greeting:", _greeting);
        greeting = _greeting;
        x = _x;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function getX() public view returns (uint8) {
        return x;
    }

    function setX(uint8 _x) public {
        x = _x;
    }

    function setGreeting(string memory _greeting) public {
        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
        greeting = _greeting;
    }
}
