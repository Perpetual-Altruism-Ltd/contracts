/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { GraphUpgradeable } from "./GraphUpgradeable";

export class GraphUpgradeableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GraphUpgradeable> {
    return super.deploy(overrides || {}) as Promise<GraphUpgradeable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GraphUpgradeable {
    return super.attach(address) as GraphUpgradeable;
  }
  connect(signer: Signer): GraphUpgradeableFactory {
    return super.connect(signer) as GraphUpgradeableFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GraphUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as GraphUpgradeable;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGraphProxy",
        name: "_proxy",
        type: "address"
      }
    ],
    name: "acceptProxy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IGraphProxy",
        name: "_proxy",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "acceptProxyAndCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061038a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80639ce7abe51461003b578063a2594d82146100bd575b600080fd5b6100bb6004803603604081101561005157600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561007c57600080fd5b82018360208201111561008e57600080fd5b803590602001918460018302840111640100000000831117156100b057600080fd5b5090925090506100e3565b005b6100bb600480360360208110156100d357600080fd5b50356001600160a01b0316610239565b82806001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561011f57600080fd5b505af1158015610133573d6000803e3d6000fd5b505050506040513d602081101561014957600080fd5b50516001600160a01b031633146101a7576040805162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206d757374206265207468652070726f78792061646d696e0000604482015290519081900360640190fd5b60405163623faf6160e01b8152602060048201908152602482018490526001600160a01b0386169163623faf619186918691908190604401848480828437600081840152601f19601f8201169050808301925050509350505050600060405180830381600087803b15801561021b57600080fd5b505af115801561022f573d6000803e3d6000fd5b5050505050505050565b80806001600160a01b031663f851a4406040518163ffffffff1660e01b8152600401602060405180830381600087803b15801561027557600080fd5b505af1158015610289573d6000803e3d6000fd5b505050506040513d602081101561029f57600080fd5b50516001600160a01b031633146102fd576040805162461bcd60e51b815260206004820152601e60248201527f43616c6c6572206d757374206265207468652070726f78792061646d696e0000604482015290519081900360640190fd5b816001600160a01b03166359fc20bb6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561033857600080fd5b505af115801561034c573d6000803e3d6000fd5b50505050505056fea2646970667358221220aecd4e50225f5774df5dc7a34436fa4087c510025530e7cb7896338d923bdc6c64736f6c63430007040033";