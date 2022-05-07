// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

//["0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2","0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db"]
//[50,50]

/**
 * Deploy Nested
 * gas : 558482
 * execution : 485636
 * proposePocket
 * gas : 238615
 * execution : 207491
 */

/**
 * Deploy No Nested
 * gas : 594399
 * execution : 516868
 * proposePocket
 * gas : 237748
 * execution : 206737
 */

contract TestNestedStruc {
    enum PocketStatus {
        Proposed,
        Signing,
        Executed
    }
    struct Pocket {
        address to; //To whom the pocket will be buy
        bytes data; //Data on chain representing the transaction
        PocketStatus pStatus; //Status of the pocket
        uint256 totalAmount; //Total amount to reach
        mapping(address => uint256) sharePerUser; //Share per user
        mapping(address => mapping(uint256 => uint256)) items721; //ERC721 => ID => Quantity
    }
    Pocket[] public pockets;
    mapping(uint256 => mapping(address => bool)) public isSigned; //poketID => commownSW owner => bool

    function proposePocket(
        address _to,
        bytes memory _data,
        uint256 _totalAmount,
        address[] memory _users,
        uint256[] memory _sharePerUser
    ) external {
        //require(_users appartient bien au CSW && nb de _users = nb _shares)
        uint256 _pocketID = pockets.length;
        pockets.push();
        pockets[_pocketID].to = _to;
        pockets[_pocketID].data = _data;
        pockets[_pocketID].pStatus = PocketStatus.Proposed;
        pockets[_pocketID].totalAmount = _totalAmount;
        for (uint8 i; i < _users.length; i++) {
            pockets[_pocketID].sharePerUser[_users[i]] = _sharePerUser[i];
        }
    }
}

contract TestNoNestedStruc {
    enum PocketStatus {
        Proposed,
        Signing,
        Executed
    }
    struct Pocket {
        address to; //To whom the pocket will be buy
        bytes data; //Data on chain representing the transaction
        PocketStatus pStatus; //Status of the pocket
        uint256 totalAmount; //Total amount to reach
    }
    Pocket[] public pockets;
    mapping(uint256 => mapping(address => bool)) public isSigned; //poketID => commownSW owner => bool
    mapping(uint256 => mapping(address => uint256)) public sharePerUser; //poketID => commownSW owner => Share per user
    mapping(uint256 => mapping(address => mapping(uint256 => uint256)))
        public items721; //poketID => ERC721 => ID => Quantity

    function proposePocket(
        address _to,
        bytes memory _data,
        uint256 _totalAmount,
        address[] memory _users,
        uint256[] memory _sharePerUser
    ) external {
        //require(_users appartient bien au CSW && nb de _users = nb _shares)
        uint256 _pocketID = pockets.length;
        pockets.push(Pocket(_to, _data, PocketStatus.Proposed, _totalAmount));
        for (uint8 i; i < _users.length; i++) {
            sharePerUser[_pocketID][_users[i]] = _sharePerUser[i];
        }
    }
}

contract TestContract {
    uint256 public i;

    function callMe(uint256 x) public {
        i += x;
    }

    function getData(uint256 x) public pure returns (bytes memory) {
        return abi.encodeWithSignature("callMe(uint256)", x);
    }
}
