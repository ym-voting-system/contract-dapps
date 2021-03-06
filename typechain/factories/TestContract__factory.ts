/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestContract, TestContractInterface } from "../TestContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "callMe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "i",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610370806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630178fe3f14610046578063e5aa3d5814610076578063e73620c314610094575b600080fd5b610060600480360381019061005b91906101a3565b6100b0565b60405161006d9190610269565b60405180910390f35b61007e610147565b60405161008b919061029a565b60405180910390f35b6100ae60048036038101906100a991906101a3565b61014d565b005b6060816040516024016100c3919061029a565b6040516020818303038152906040527fe73620c3000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050919050565b60005481565b8060008082825461015e91906102e4565b9250508190555050565b600080fd5b6000819050919050565b6101808161016d565b811461018b57600080fd5b50565b60008135905061019d81610177565b92915050565b6000602082840312156101b9576101b8610168565b5b60006101c78482850161018e565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561020a5780820151818401526020810190506101ef565b83811115610219576000848401525b50505050565b6000601f19601f8301169050919050565b600061023b826101d0565b61024581856101db565b93506102558185602086016101ec565b61025e8161021f565b840191505092915050565b600060208201905081810360008301526102838184610230565b905092915050565b6102948161016d565b82525050565b60006020820190506102af600083018461028b565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006102ef8261016d565b91506102fa8361016d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561032f5761032e6102b5565b5b82820190509291505056fea2646970667358221220c4c24079535a4a7e82a9338f252f17f6fd601ec1c0c2eebf9e8ae2d87825217a64736f6c634300080d0033";

export class TestContract__factory extends ContractFactory {
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
  ): Promise<TestContract> {
    return super.deploy(overrides || {}) as Promise<TestContract>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestContract {
    return super.attach(address) as TestContract;
  }
  connect(signer: Signer): TestContract__factory {
    return super.connect(signer) as TestContract__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestContractInterface {
    return new utils.Interface(_abi) as TestContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestContract {
    return new Contract(address, _abi, signerOrProvider) as TestContract;
  }
}
