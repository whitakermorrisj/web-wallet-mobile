/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SimpleM4mNFT, SimpleM4mNFTInterface } from "../SimpleM4mNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintPaused",
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
    name: "minter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "symbol",
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
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
  {
    inputs: [],
    name: "tokenIndex",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
    inputs: [],
    name: "totalSupply",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001c1538038062001c158339810160408190526200003491620001e1565b8151829082906200004d9060009060208501906200006e565b508051620000639060019060208401906200006e565b505050505062000288565b8280546200007c906200024b565b90600052602060002090601f016020900481019282620000a05760008555620000eb565b82601f10620000bb57805160ff1916838001178555620000eb565b82800160010185558215620000eb579182015b82811115620000eb578251825591602001919060010190620000ce565b50620000f9929150620000fd565b5090565b5b80821115620000f95760008155600101620000fe565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200013c57600080fd5b81516001600160401b038082111562000159576200015962000114565b604051601f8301601f19908116603f0116810190828211818310171562000184576200018462000114565b81604052838152602092508683858801011115620001a157600080fd5b600091505b83821015620001c55785820183015181830184015290820190620001a6565b83821115620001d75760008385830101525b9695505050505050565b60008060408385031215620001f557600080fd5b82516001600160401b03808211156200020d57600080fd5b6200021b868387016200012a565b935060208501519150808211156200023257600080fd5b5062000241858286016200012a565b9150509250929050565b600181811c908216806200026057607f821691505b602082108114156200028257634e487b7160e01b600052602260045260246000fd5b50919050565b61197d80620002986000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c806370a08231116100b8578063b88d4fde1161007c578063b88d4fde1461028e578063c87b56dd146102a1578063d0def521146102b4578063d204c45e146102c7578063d55f9273146102da578063e985e9c5146102e357600080fd5b806370a082311461022a5780637e4831d31461023d57806395d89b411461024a578063a22cb46514610252578063ac8d856c1461026557600080fd5b806323b872dd116100ff57806323b872dd146101cb5780632f745c59146101de57806342842e0e146101f15780634f6ccce7146102045780636352211e1461021757600080fd5b806301ffc9a71461013c57806306fdde0314610164578063081812fc14610179578063095ea7b3146101a457806318160ddd146101b9575b600080fd5b61014f61014a36600461137a565b61031f565b60405190151581526020015b60405180910390f35b61016c61034a565b60405161015b91906113eb565b61018c6101873660046113fe565b6103dc565b6040516001600160a01b03909116815260200161015b565b6101b76101b2366004611433565b610403565b005b6008545b60405190815260200161015b565b6101b76101d936600461145d565b61051e565b6101bd6101ec366004611433565b61054f565b6101b76101ff36600461145d565b6105e5565b6101bd6102123660046113fe565b610600565b61018c6102253660046113fe565b610693565b6101bd610238366004611499565b6106f3565b600b5461014f9060ff1681565b61016c610779565b6101b76102603660046114b4565b610788565b61018c6102733660046113fe565b600d602052600090815260409020546001600160a01b031681565b6101b761029c36600461157c565b610797565b61016c6102af3660046113fe565b6107cf565b6101b76102c23660046115f8565b61080a565b6101b76102d53660046115f8565b610871565b6101bd600a5481565b61014f6102f136600461165a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006001600160e01b0319821663780e9d6360e01b148061034457506103448261087d565b92915050565b6060600080546103599061168d565b80601f01602080910402602001604051908101604052809291908181526020018280546103859061168d565b80156103d25780601f106103a7576101008083540402835291602001916103d2565b820191906000526020600020905b8154815290600101906020018083116103b557829003601f168201915b5050505050905090565b60006103e7826108cd565b506000908152600460205260409020546001600160a01b031690565b600061040e82610693565b9050806001600160a01b0316836001600160a01b031614156104815760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061049d575061049d81336102f1565b61050f5760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c0000006064820152608401610478565b610519838361092f565b505050565b610528338261099d565b6105445760405162461bcd60e51b8152600401610478906116c8565b610519838383610a1c565b600061055a836106f3565b82106105bc5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610478565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b61051983838360405180602001604052806000815250610797565b600061060b60085490565b821061066e5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610478565b6008828154811061068157610681611715565b90600052602060002001549050919050565b6000818152600260205260408120546001600160a01b0316806103445760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610478565b60006001600160a01b03821661075d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610478565b506001600160a01b031660009081526003602052604090205490565b6060600180546103599061168d565b610793338383610b8d565b5050565b6107a1338361099d565b6107bd5760405162461bcd60e51b8152600401610478906116c8565b6107c984848484610c5c565b50505050565b6060600c60008381526020019081526020016000206040516020016107f4919061172b565b6040516020818303038152906040529050919050565b61081682600a54610c8f565b600a546000908152600c602090815260409091208251610838928401906112cb565b50600a80546000908152600d6020526040812080546001600160a01b0319163317905581549190610868836117f6565b91905055505050565b61081682600a54610e28565b60006001600160e01b031982166380ac58cd60e01b14806108ae57506001600160e01b03198216635b5e139f60e01b145b8061034457506301ffc9a760e01b6001600160e01b0319831614610344565b6000818152600260205260409020546001600160a01b031661092c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610478565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061096482610693565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806109a983610693565b9050806001600160a01b0316846001600160a01b031614806109f057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610a145750836001600160a01b0316610a09846103dc565b6001600160a01b0316145b949350505050565b826001600160a01b0316610a2f82610693565b6001600160a01b031614610a555760405162461bcd60e51b815260040161047890611811565b6001600160a01b038216610ab75760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610478565b610ac48383836001610e42565b826001600160a01b0316610ad782610693565b6001600160a01b031614610afd5760405162461bcd60e51b815260040161047890611811565b600081815260046020908152604080832080546001600160a01b03199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b816001600160a01b0316836001600160a01b03161415610bef5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610478565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610c67848484610a1c565b610c7384848484610f82565b6107c95760405162461bcd60e51b815260040161047890611856565b6001600160a01b038216610ce55760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610478565b6000818152600260205260409020546001600160a01b031615610d4a5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610478565b610d58600083836001610e42565b6000818152600260205260409020546001600160a01b031615610dbd5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610478565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b610793828260405180602001604052806000815250611080565b610e4e848484846110b3565b6001811115610ebd5760405162461bcd60e51b815260206004820152603560248201527f455243373231456e756d657261626c653a20636f6e7365637574697665207472604482015274185b9cd9995c9cc81b9bdd081cdd5c1c1bdc9d1959605a1b6064820152608401610478565b816001600160a01b038516610f1957610f1481600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b610f3c565b836001600160a01b0316856001600160a01b031614610f3c57610f3c858261113b565b6001600160a01b038416610f5857610f53816111d8565b610f7b565b846001600160a01b0316846001600160a01b031614610f7b57610f7b8482611287565b5050505050565b60006001600160a01b0384163b1561107557604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290610fc69033908990889088906004016118a8565b6020604051808303816000875af1925050508015611001575060408051601f3d908101601f19168201909252610ffe918101906118e5565b60015b61105b573d80801561102f576040519150601f19603f3d011682016040523d82523d6000602084013e611034565b606091505b5080516110535760405162461bcd60e51b815260040161047890611856565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610a14565b506001949350505050565b61108a8383610c8f565b6110976000848484610f82565b6105195760405162461bcd60e51b815260040161047890611856565b60018111156107c9576001600160a01b038416156110f9576001600160a01b038416600090815260036020526040812080548392906110f3908490611902565b90915550505b6001600160a01b038316156107c9576001600160a01b03831660009081526003602052604081208054839290611130908490611919565b909155505050505050565b60006001611148846106f3565b6111529190611902565b6000838152600760205260409020549091508082146111a5576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b6008546000906111ea90600190611902565b6000838152600960205260408120546008805493945090928490811061121257611212611715565b90600052602060002001549050806008838154811061123357611233611715565b600091825260208083209091019290925582815260099091526040808220849055858252812055600880548061126b5761126b611931565b6001900381819060005260206000200160009055905550505050565b6000611292836106f3565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b8280546112d79061168d565b90600052602060002090601f0160209004810192826112f9576000855561133f565b82601f1061131257805160ff191683800117855561133f565b8280016001018555821561133f579182015b8281111561133f578251825591602001919060010190611324565b5061134b92915061134f565b5090565b5b8082111561134b5760008155600101611350565b6001600160e01b03198116811461092c57600080fd5b60006020828403121561138c57600080fd5b813561139781611364565b9392505050565b6000815180845260005b818110156113c4576020818501810151868301820152016113a8565b818111156113d6576000602083870101525b50601f01601f19169290920160200192915050565b602081526000611397602083018461139e565b60006020828403121561141057600080fd5b5035919050565b80356001600160a01b038116811461142e57600080fd5b919050565b6000806040838503121561144657600080fd5b61144f83611417565b946020939093013593505050565b60008060006060848603121561147257600080fd5b61147b84611417565b925061148960208501611417565b9150604084013590509250925092565b6000602082840312156114ab57600080fd5b61139782611417565b600080604083850312156114c757600080fd5b6114d083611417565b9150602083013580151581146114e557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff80841115611521576115216114f0565b604051601f8501601f19908116603f01168101908282118183101715611549576115496114f0565b8160405280935085815286868601111561156257600080fd5b858560208301376000602087830101525050509392505050565b6000806000806080858703121561159257600080fd5b61159b85611417565b93506115a960208601611417565b925060408501359150606085013567ffffffffffffffff8111156115cc57600080fd5b8501601f810187136115dd57600080fd5b6115ec87823560208401611506565b91505092959194509250565b6000806040838503121561160b57600080fd5b61161483611417565b9150602083013567ffffffffffffffff81111561163057600080fd5b8301601f8101851361164157600080fd5b61165085823560208401611506565b9150509250929050565b6000806040838503121561166d57600080fd5b61167683611417565b915061168460208401611417565b90509250929050565b600181811c908216806116a157607f821691505b602082108114156116c257634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602d908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526c1c881bdc88185c1c1c9bdd9959609a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b66697066733a2f2f60c81b8152600060076000845481600182811c91508083168061175757607f831692505b602080841082141561177757634e487b7160e01b86526022600452602486fd5b81801561178b57600181146117a0576117d1565b60ff1986168a890152848a01880196506117d1565b60008b81526020902060005b868110156117c75781548c82018b01529085019083016117ac565b505087858b010196505b50949998505050505050505050565b634e487b7160e01b600052601160045260246000fd5b600060001982141561180a5761180a6117e0565b5060010190565b60208082526025908201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060408201526437bbb732b960d91b606082015260800190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906118db9083018461139e565b9695505050505050565b6000602082840312156118f757600080fd5b815161139781611364565b600082821015611914576119146117e0565b500390565b6000821982111561192c5761192c6117e0565b500190565b634e487b7160e01b600052603160045260246000fdfea26469706673582212204aedb98f738c690abbed00cf66fd17981cb1dbe4ae3d8221c8e63492ca0803b364736f6c634300080c0033";

type SimpleM4mNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleM4mNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleM4mNFT__factory extends ContractFactory {
  constructor(...args: SimpleM4mNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "SimpleM4mNFT";
  }

  deploy(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SimpleM4mNFT> {
    return super.deploy(
      name_,
      symbol_,
      overrides || {}
    ) as Promise<SimpleM4mNFT>;
  }
  getDeployTransaction(
    name_: string,
    symbol_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  attach(address: string): SimpleM4mNFT {
    return super.attach(address) as SimpleM4mNFT;
  }
  connect(signer: Signer): SimpleM4mNFT__factory {
    return super.connect(signer) as SimpleM4mNFT__factory;
  }
  static readonly contractName: "SimpleM4mNFT";
  public readonly contractName: "SimpleM4mNFT";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleM4mNFTInterface {
    return new utils.Interface(_abi) as SimpleM4mNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SimpleM4mNFT {
    return new Contract(address, _abi, signerOrProvider) as SimpleM4mNFT;
  }
}
