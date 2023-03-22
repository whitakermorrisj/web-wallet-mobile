/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Manager, ManagerInterface } from "../Manager";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
    ],
    name: "getInfo",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
    ],
    name: "getLatestInfoAll",
    outputs: [
      {
        internalType: "address[]",
        name: "_creators",
        type: "address[]",
      },
      {
        internalType: "string[]",
        name: "_uris",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "info",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "nft",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
        ],
        internalType: "struct IManager.Token",
        name: "token",
        type: "tuple",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061097f806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806341fbc508146100515780634596f5941461007a5780636520d46d1461008f578063adbbcb95146100b0575b600080fd5b61006461005f366004610603565b6100c3565b604051610071919061067c565b60405180910390f35b61008d61008836600461073e565b610165565b005b6100a261009d3660046107e7565b61023a565b604051610071929190610803565b6100646100be3660046108a4565b61041b565b6000602081815292815260408082209093529081522080546100e4906108cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610110906108cf565b801561015d5780601f106101325761010080835404028352916020019161015d565b820191906000526020600020905b81548152906001019060200180831161014057829003601f168201915b505050505081565b60008151116101a85760405162461bcd60e51b815260206004820152600b60248201526a696c6c6567616c2075726960a81b604482015260640160405180910390fd5b60006101b3836104eb565b60008181526020818152604080832033845290915290208054919250906101d9906108cf565b1515905061020f57600081815260016020818152604083208054928301815583529091200180546001600160a01b031916331790555b600081815260208181526040808320338452825290912083516102349285019061054e565b50505050565b6060806000610248846104eb565b60008181526001602090815260409182902080548351818402810184019094528084529394509192908301828280156102aa57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161028c575b50505050509250825167ffffffffffffffff8111156102cb576102cb610696565b6040519080825280602002602001820160405280156102fe57816020015b60608152602001906001900390816102e95790505b50915060005b83518110156104145760008083815260200190815260200160002060008583815181106103335761033361090a565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000208054610366906108cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610392906108cf565b80156103df5780601f106103b4576101008083540402835291602001916103df565b820191906000526020600020905b8154815290600101906020018083116103c257829003601f168201915b50505050508382815181106103f6576103f661090a565b6020026020010181905250808061040c90610920565b915050610304565b5050915091565b6060600080610429856104eb565b81526020019081526020016000206000836001600160a01b03166001600160a01b031681526020019081526020016000208054610465906108cf565b80601f0160208091040260200160405190810160405280929190818152602001828054610491906108cf565b80156104de5780601f106104b3576101008083540402835291602001916104de565b820191906000526020600020905b8154815290600101906020018083116104c157829003601f168201915b5050505050905092915050565b60008160000151826020015183604001516040516020016105319392919092835260609190911b6bffffffffffffffffffffffff19166020830152603482015260540190565b604051602081830303815290604052805190602001209050919050565b82805461055a906108cf565b90600052602060002090601f01602090048101928261057c57600085556105c2565b82601f1061059557805160ff19168380011785556105c2565b828001600101855582156105c2579182015b828111156105c25782518255916020019190600101906105a7565b506105ce9291506105d2565b5090565b5b808211156105ce57600081556001016105d3565b80356001600160a01b03811681146105fe57600080fd5b919050565b6000806040838503121561061657600080fd5b82359150610626602084016105e7565b90509250929050565b6000815180845260005b8181101561065557602081850181015186830182015201610639565b81811115610667576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061068f602083018461062f565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156106d5576106d5610696565b604052919050565b6000606082840312156106ef57600080fd5b6040516060810181811067ffffffffffffffff8211171561071257610712610696565b60405282358152905080610728602084016105e7565b6020820152604083013560408201525092915050565b6000806080838503121561075157600080fd5b61075b84846106dd565b9150606083013567ffffffffffffffff8082111561077857600080fd5b818501915085601f83011261078c57600080fd5b81358181111561079e5761079e610696565b6107b1601f8201601f19166020016106ac565b91508082528660208285010111156107c857600080fd5b8060208401602084013760009082016020015292959294509192505050565b6000606082840312156107f957600080fd5b61068f83836106dd565b604080825283519082018190526000906020906060840190828701845b828110156108455781516001600160a01b031684529284019290840190600101610820565b50505083810382850152845180825282820190600581901b8301840187850160005b8381101561089557601f1986840301855261088383835161062f565b94870194925090860190600101610867565b50909998505050505050505050565b600080608083850312156108b757600080fd5b6108c184846106dd565b9150610626606084016105e7565b600181811c908216806108e357607f821691505b6020821081141561090457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561094257634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212200b94c634c1d4e6664e252f4a83c591d4a685f74fc0bd3a25f428805d0152151c64736f6c634300080c0033";

type ManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Manager__factory extends ContractFactory {
  constructor(...args: ManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Manager";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Manager> {
    return super.deploy(overrides || {}) as Promise<Manager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Manager {
    return super.attach(address) as Manager;
  }
  connect(signer: Signer): Manager__factory {
    return super.connect(signer) as Manager__factory;
  }
  static readonly contractName: "Manager";
  public readonly contractName: "Manager";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ManagerInterface {
    return new utils.Interface(_abi) as ManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Manager {
    return new Contract(address, _abi, signerOrProvider) as Manager;
  }
}