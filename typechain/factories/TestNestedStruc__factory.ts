/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TestNestedStruc,
  TestNestedStrucInterface,
} from "../TestNestedStruc";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isSigned",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "pockets",
    outputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "enum TestNestedStruc.PocketStatus",
        name: "pStatus",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_totalAmount",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "_users",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_sharePerUser",
        type: "uint256[]",
      },
    ],
    name: "proposePocket",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c12806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80633e6d21fa1461004657806381389add146100765780638fe371d214610092575b600080fd5b610060600480360381019061005b919061053c565b6100c5565b60405161006d9190610597565b60405180910390f35b610090600480360381019061008b9190610883565b6100f4565b005b6100ac60048036038101906100a79190610952565b6102fc565b6040516100bc9493929190610a9c565b60405180910390f35b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60008080549050905060006001816001815401808255809150500390600052602060002090505085600082815481106101305761012f610ae8565b5b906000526020600020906006020160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550846000828154811061019457610193610ae8565b5b906000526020600020906006020160010190805190602001906101b89291906103f1565b5060008082815481106101ce576101cd610ae8565b5b906000526020600020906006020160020160006101000a81548160ff0219169083600281111561020157610200610a16565b5b0217905550836000828154811061021b5761021a610ae8565b5b90600052602060002090600602016003018190555060005b83518160ff1610156102f357828160ff168151811061025557610254610ae8565b5b60200260200101516000838154811061027157610270610ae8565b5b90600052602060002090600602016004016000868460ff168151811061029a57610299610ae8565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080806102eb90610b53565b915050610233565b50505050505050565b6000818154811061030c57600080fd5b90600052602060002090600602016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101805461035590610bab565b80601f016020809104026020016040519081016040528092919081815260200182805461038190610bab565b80156103ce5780601f106103a3576101008083540402835291602001916103ce565b820191906000526020600020905b8154815290600101906020018083116103b157829003601f168201915b5050505050908060020160009054906101000a900460ff16908060030154905084565b8280546103fd90610bab565b90600052602060002090601f01602090048101928261041f5760008555610466565b82601f1061043857805160ff1916838001178555610466565b82800160010185558215610466579182015b8281111561046557825182559160200191906001019061044a565b5b5090506104739190610477565b5090565b5b80821115610490576000816000905550600101610478565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6104bb816104a8565b81146104c657600080fd5b50565b6000813590506104d8816104b2565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610509826104de565b9050919050565b610519816104fe565b811461052457600080fd5b50565b60008135905061053681610510565b92915050565b600080604083850312156105535761055261049e565b5b6000610561858286016104c9565b925050602061057285828601610527565b9150509250929050565b60008115159050919050565b6105918161057c565b82525050565b60006020820190506105ac6000830184610588565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610605826105bc565b810181811067ffffffffffffffff82111715610624576106236105cd565b5b80604052505050565b6000610637610494565b905061064382826105fc565b919050565b600067ffffffffffffffff821115610663576106626105cd565b5b61066c826105bc565b9050602081019050919050565b82818337600083830152505050565b600061069b61069684610648565b61062d565b9050828152602081018484840111156106b7576106b66105b7565b5b6106c2848285610679565b509392505050565b600082601f8301126106df576106de6105b2565b5b81356106ef848260208601610688565b91505092915050565b600067ffffffffffffffff821115610713576107126105cd565b5b602082029050602081019050919050565b600080fd5b600061073c610737846106f8565b61062d565b9050808382526020820190506020840283018581111561075f5761075e610724565b5b835b8181101561078857806107748882610527565b845260208401935050602081019050610761565b5050509392505050565b600082601f8301126107a7576107a66105b2565b5b81356107b7848260208601610729565b91505092915050565b600067ffffffffffffffff8211156107db576107da6105cd565b5b602082029050602081019050919050565b60006107ff6107fa846107c0565b61062d565b9050808382526020820190506020840283018581111561082257610821610724565b5b835b8181101561084b578061083788826104c9565b845260208401935050602081019050610824565b5050509392505050565b600082601f83011261086a576108696105b2565b5b813561087a8482602086016107ec565b91505092915050565b600080600080600060a0868803121561089f5761089e61049e565b5b60006108ad88828901610527565b955050602086013567ffffffffffffffff8111156108ce576108cd6104a3565b5b6108da888289016106ca565b94505060406108eb888289016104c9565b935050606086013567ffffffffffffffff81111561090c5761090b6104a3565b5b61091888828901610792565b925050608086013567ffffffffffffffff811115610939576109386104a3565b5b61094588828901610855565b9150509295509295909350565b6000602082840312156109685761096761049e565b5b6000610976848285016104c9565b91505092915050565b610988816104fe565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156109c85780820151818401526020810190506109ad565b838111156109d7576000848401525b50505050565b60006109e88261098e565b6109f28185610999565b9350610a028185602086016109aa565b610a0b816105bc565b840191505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60038110610a5657610a55610a16565b5b50565b6000819050610a6782610a45565b919050565b6000610a7782610a59565b9050919050565b610a8781610a6c565b82525050565b610a96816104a8565b82525050565b6000608082019050610ab1600083018761097f565b8181036020830152610ac381866109dd565b9050610ad26040830185610a7e565b610adf6060830184610a8d565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600060ff82169050919050565b6000610b5e82610b46565b915060ff8203610b7157610b70610b17565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610bc357607f821691505b602082108103610bd657610bd5610b7c565b5b5091905056fea26469706673582212209d87edf4c2c07aafe1cc23c18c701709249d60d71a80f5b4d2fc78b7ac23ff4664736f6c634300080d0033";

export class TestNestedStruc__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestNestedStruc> {
    return super.deploy(overrides || {}) as Promise<TestNestedStruc>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestNestedStruc {
    return super.attach(address) as TestNestedStruc;
  }
  connect(signer: Signer): TestNestedStruc__factory {
    return super.connect(signer) as TestNestedStruc__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestNestedStrucInterface {
    return new utils.Interface(_abi) as TestNestedStrucInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestNestedStruc {
    return new Contract(address, _abi, signerOrProvider) as TestNestedStruc;
  }
}
