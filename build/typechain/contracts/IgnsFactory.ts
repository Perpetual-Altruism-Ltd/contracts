/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { Igns } from "./Igns";

export class IgnsFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): Igns {
    return new Contract(address, _abi, signerOrProvider) as Igns;
  }
}

const _abi = [
  {
    inputs: [],
    name: "approveAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_nSignal",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_tokensOutMin",
        type: "uint256"
      }
    ],
    name: "burnNSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      }
    ],
    name: "deprecateSubgraph",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "_curator",
        type: "address"
      }
    ],
    name: "getCuratorNSignal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      }
    ],
    name: "isPublished",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_tokensIn",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_nSignalOutMin",
        type: "uint256"
      }
    ],
    name: "mintNSignal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_nSignalIn",
        type: "uint256"
      }
    ],
    name: "nSignalToTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_nSignalIn",
        type: "uint256"
      }
    ],
    name: "nSignalToVSignal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "_subgraphDeploymentID",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_versionMetadata",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_subgraphMetadata",
        type: "bytes32"
      }
    ],
    name: "publishNewSubgraph",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_subgraphDeploymentID",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_versionMetadata",
        type: "bytes32"
      }
    ],
    name: "publishNewVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "_nameSystem",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "_nameIdentifier",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      }
    ],
    name: "setDefaultName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_ownerTaxPercentage",
        type: "uint32"
      }
    ],
    name: "setOwnerTaxPercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_tokensIn",
        type: "uint256"
      }
    ],
    name: "tokensToNSignal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "bytes32",
        name: "_subgraphMetadata",
        type: "bytes32"
      }
    ],
    name: "updateSubgraphMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_vSignalIn",
        type: "uint256"
      }
    ],
    name: "vSignalToNSignal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_graphAccount",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_subgraphNumber",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];