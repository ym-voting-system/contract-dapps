/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_x",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getX",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "greet",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_x",
        type: "uint8",
      },
    ],
    name: "setX",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "x",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e4038038062000e408339818101604052810190620000379190620003fd565b6200006760405180606001604052806022815260200162000e1e6022913983620000a360201b6200028f1760201c565b81600090805190602001906200007f92919062000172565b5080600160006101000a81548160ff021916908360ff16021790555050506200055f565b620001458282604051602401620000bc929190620004c0565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200014960201b60201c565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805462000180906200052a565b90600052602060002090601f016020900481019282620001a45760008555620001f0565b82601f10620001bf57805160ff1916838001178555620001f0565b82800160010185558215620001f0579182015b82811115620001ef578251825591602001919060010190620001d2565b5b509050620001ff919062000203565b5090565b5b808211156200021e57600081600090555060010162000204565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200028b8262000240565b810181811067ffffffffffffffff82111715620002ad57620002ac62000251565b5b80604052505050565b6000620002c262000222565b9050620002d0828262000280565b919050565b600067ffffffffffffffff821115620002f357620002f262000251565b5b620002fe8262000240565b9050602081019050919050565b60005b838110156200032b5780820151818401526020810190506200030e565b838111156200033b576000848401525b50505050565b6000620003586200035284620002d5565b620002b6565b9050828152602081018484840111156200037757620003766200023b565b5b620003848482856200030b565b509392505050565b600082601f830112620003a457620003a362000236565b5b8151620003b684826020860162000341565b91505092915050565b600060ff82169050919050565b620003d781620003bf565b8114620003e357600080fd5b50565b600081519050620003f781620003cc565b92915050565b600080604083850312156200041757620004166200022c565b5b600083015167ffffffffffffffff81111562000438576200043762000231565b5b62000446858286016200038c565b92505060206200045985828601620003e6565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b60006200048c8262000463565b6200049881856200046e565b9350620004aa8185602086016200030b565b620004b58162000240565b840191505092915050565b60006040820190508181036000830152620004dc81856200047f565b90508181036020830152620004f281846200047f565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200054357607f821691505b602082108103620005595762000558620004fb565b5b50919050565b6108af806200056f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630c55699c1461005c5780635197c7aa1461007a5780639da2065514610098578063a4136862146100b4578063cfae3217146100d0575b600080fd5b6100646100ee565b60405161007191906104b2565b60405180910390f35b610082610101565b60405161008f91906104b2565b60405180910390f35b6100b260048036038101906100ad919061050d565b610118565b005b6100ce60048036038101906100c99190610680565b610136565b005b6100d86101fd565b6040516100e59190610751565b60405180910390f35b600160009054906101000a900460ff1681565b6000600160009054906101000a900460ff16905090565b80600160006101000a81548160ff021916908360ff16021790555050565b6101e3604051806060016040528060238152602001610857602391396000805461015f906107a2565b80601f016020809104026020016040519081016040528092919081815260200182805461018b906107a2565b80156101d85780601f106101ad576101008083540402835291602001916101d8565b820191906000526020600020905b8154815290600101906020018083116101bb57829003601f168201915b50505050508361032b565b80600090805190602001906101f99291906103f3565b5050565b60606000805461020c906107a2565b80601f0160208091040260200160405190810160405280929190818152602001828054610238906107a2565b80156102855780601f1061025a57610100808354040283529160200191610285565b820191906000526020600020905b81548152906001019060200180831161026857829003601f168201915b5050505050905090565b61032782826040516024016102a59291906107d3565b6040516020818303038152906040527f4b5c4277000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103ca565b5050565b6103c58383836040516024016103439392919061080a565b6040516020818303038152906040527f2ced7cef000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506103ca565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546103ff906107a2565b90600052602060002090601f0160209004810192826104215760008555610468565b82601f1061043a57805160ff1916838001178555610468565b82800160010185558215610468579182015b8281111561046757825182559160200191906001019061044c565b5b5090506104759190610479565b5090565b5b8082111561049257600081600090555060010161047a565b5090565b600060ff82169050919050565b6104ac81610496565b82525050565b60006020820190506104c760008301846104a3565b92915050565b6000604051905090565b600080fd5b600080fd5b6104ea81610496565b81146104f557600080fd5b50565b600081359050610507816104e1565b92915050565b600060208284031215610523576105226104d7565b5b6000610531848285016104f8565b91505092915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61058d82610544565b810181811067ffffffffffffffff821117156105ac576105ab610555565b5b80604052505050565b60006105bf6104cd565b90506105cb8282610584565b919050565b600067ffffffffffffffff8211156105eb576105ea610555565b5b6105f482610544565b9050602081019050919050565b82818337600083830152505050565b600061062361061e846105d0565b6105b5565b90508281526020810184848401111561063f5761063e61053f565b5b61064a848285610601565b509392505050565b600082601f8301126106675761066661053a565b5b8135610677848260208601610610565b91505092915050565b600060208284031215610696576106956104d7565b5b600082013567ffffffffffffffff8111156106b4576106b36104dc565b5b6106c084828501610652565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156107035780820151818401526020810190506106e8565b83811115610712576000848401525b50505050565b6000610723826106c9565b61072d81856106d4565b935061073d8185602086016106e5565b61074681610544565b840191505092915050565b6000602082019050818103600083015261076b8184610718565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806107ba57607f821691505b6020821081036107cd576107cc610773565b5b50919050565b600060408201905081810360008301526107ed8185610718565b905081810360208301526108018184610718565b90509392505050565b600060608201905081810360008301526108248186610718565b905081810360208301526108388185610718565b9050818103604083015261084c8184610718565b905094935050505056fe4368616e67696e67206772656574696e672066726f6d202725732720746f2027257327a2646970667358221220c4bbb63067e6c15a4f937eb7e952eab8c0542a221a675c0a2a39f6ea365c813f64736f6c634300080d00334465706c6f79696e67206120477265657465722077697468206772656574696e673a";

export class Greeter__factory extends ContractFactory {
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
    _greeting: string,
    _x: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, _x, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    _x: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, _x, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
