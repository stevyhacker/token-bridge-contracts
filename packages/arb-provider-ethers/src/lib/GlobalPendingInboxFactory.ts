/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from 'ethers';
import { Provider } from 'ethers/providers';
import { UnsignedTransaction } from 'ethers/utils/transaction';

import { GlobalPendingInbox } from './GlobalPendingInbox';

export class GlobalPendingInboxFactory extends ContractFactory {
    constructor(signer?: Signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(): Promise<GlobalPendingInbox> {
        return super.deploy() as Promise<GlobalPendingInbox>;
    }
    getDeployTransaction(): UnsignedTransaction {
        return super.getDeployTransaction();
    }
    attach(address: string): GlobalPendingInbox {
        return super.attach(address) as GlobalPendingInbox;
    }
    connect(signer: Signer): GlobalPendingInboxFactory {
        return super.connect(signer) as GlobalPendingInboxFactory;
    }
    static connect(address: string, signerOrProvider: Signer | Provider): GlobalPendingInbox {
        return new Contract(address, _abi, signerOrProvider) as GlobalPendingInbox;
    }
}

const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: 'address',
                name: 'vmId',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'address',
                name: 'sender',
                type: 'address',
            },
            {
                indexed: false,
                internalType: 'bytes21',
                name: 'tokenType',
                type: 'bytes21',
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: 'value',
                type: 'uint256',
            },
            {
                indexed: false,
                internalType: 'bytes',
                name: 'data',
                type: 'bytes',
            },
        ],
        name: 'MessageDelivered',
        type: 'event',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'depositERC20',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'depositERC721',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_destination',
                type: 'address',
            },
        ],
        name: 'depositEth',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'getNFTTokens',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'getTokenBalance',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
        ],
        name: 'getTokenBalances',
        outputs: [
            {
                internalType: 'address[]',
                name: '',
                type: 'address[]',
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_owner',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'hasNFT',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address',
            },
            {
                internalType: 'address',
                name: '_from',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '',
                type: 'bytes',
            },
        ],
        name: 'onERC721Received',
        outputs: [
            {
                internalType: 'bytes4',
                name: '',
                type: 'bytes4',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'withdrawERC20',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_tokenContract',
                type: 'address',
            },
            {
                internalType: 'uint256',
                name: '_tokenId',
                type: 'uint256',
            },
        ],
        name: 'withdrawERC721',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
        ],
        name: 'withdrawEth',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'getPending',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256',
            },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'bytes',
                name: '_messages',
                type: 'bytes',
            },
        ],
        name: 'sendMessages',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [],
        name: 'registerForInbox',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_destination',
                type: 'address',
            },
            {
                internalType: 'bytes21',
                name: '_tokenType',
                type: 'bytes21',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'sendMessage',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_destination',
                type: 'address',
            },
            {
                internalType: 'bytes21',
                name: '_tokenType',
                type: 'bytes21',
            },
            {
                internalType: 'uint256',
                name: '_amount',
                type: 'uint256',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
            {
                internalType: 'bytes',
                name: '_signature',
                type: 'bytes',
            },
        ],
        name: 'forwardMessage',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
    },
    {
        constant: false,
        inputs: [
            {
                internalType: 'address',
                name: '_destination',
                type: 'address',
            },
            {
                internalType: 'bytes',
                name: '_data',
                type: 'bytes',
            },
        ],
        name: 'sendEthMessage',
        outputs: [],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
    },
    {
        constant: true,
        inputs: [
            {
                internalType: 'address',
                name: '_dest',
                type: 'address',
            },
            {
                internalType: 'bytes32',
                name: '_data',
                type: 'bytes32',
            },
            {
                internalType: 'bytes21',
                name: '_tokenType',
                type: 'bytes21',
            },
            {
                internalType: 'uint256',
                name: '_value',
                type: 'uint256',
            },
            {
                internalType: 'address',
                name: '_sender',
                type: 'address',
            },
        ],
        name: 'generateSentMessageHash',
        outputs: [
            {
                internalType: 'bytes32',
                name: '',
                type: 'bytes32',
            },
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function',
    },
];

const _bytecode =
    '0x608060405234801561001057600080fd5b50612fab806100206000396000f3fe6080604052600436106101095760003560e01c8063a1db978211610095578063d29a4bf611610064578063d29a4bf61461066d578063e318b003146106a6578063e4eb8c63146106fd578063f397238314610778578063f3e414f81461078d57610109565b8063a1db9782146105a9578063ad9d4ba3146105e2578063c311d04914610608578063c489744b1461063257610109565b8063505221a1116100dc578063505221a114610365578063578c049a146103d0578063626cef851461049c578063764f3aa81461053d57806397feb9261461057057610109565b806311ae9ed21461010e578063150b7a021461013c5780633bbc3c32146101f45780633fc6eb80146102e7575b600080fd5b34801561011a57600080fd5b506101236107c6565b6040805192835260208301919091528051918290030190f35b34801561014857600080fd5b506101d76004803603608081101561015f57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561019957600080fd5b8201836020820111156101ab57600080fd5b803590602001918460018302840111600160201b831117156101cc57600080fd5b5090925090506107e1565b604080516001600160e01b03199092168252519081900360200190f35b34801561020057600080fd5b506102e5600480360360a081101561021757600080fd5b6001600160a01b03823516916001600160581b03196020820135169160408201359190810190608081016060820135600160201b81111561025757600080fd5b82018360208201111561026957600080fd5b803590602001918460018302840111600160201b8311171561028a57600080fd5b919390929091602081019035600160201b8111156102a757600080fd5b8201836020820111156102b957600080fd5b803590602001918460018302840111600160201b831117156102da57600080fd5b509092509050610810565b005b6102e5600480360360408110156102fd57600080fd5b6001600160a01b038235169190810190604081016020820135600160201b81111561032757600080fd5b82018360208201111561033957600080fd5b803590602001918460018302840111600160201b8311171561035a57600080fd5b509092509050610946565b34801561037157600080fd5b506103be600480360360a081101561038857600080fd5b506001600160a01b0381358116916020810135916001600160581b0319604083013516916060810135916080909101351661099b565b60408051918252519081900360200190f35b3480156103dc57600080fd5b50610403600480360360208110156103f357600080fd5b50356001600160a01b03166109a6565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b8381101561044757818101518382015260200161042f565b50505050905001838103825284818151815260200191508051906020019060200280838360005b8381101561048657818101518382015260200161046e565b5050505090500194505050505060405180910390f35b3480156104a857600080fd5b506102e5600480360360808110156104bf57600080fd5b6001600160a01b03823516916001600160581b03196020820135169160408201359190810190608081016060820135600160201b8111156104ff57600080fd5b82018360208201111561051157600080fd5b803590602001918460018302840111600160201b8311171561053257600080fd5b509092509050610b3e565b34801561054957600080fd5b506104036004803603602081101561056057600080fd5b50356001600160a01b0316610b88565b34801561057c57600080fd5b506102e56004803603604081101561059357600080fd5b506001600160a01b038135169060200135610cbc565b3480156105b557600080fd5b506102e5600480360360408110156105cc57600080fd5b506001600160a01b038135169060200135610d4d565b6102e5600480360360208110156105f857600080fd5b50356001600160a01b0316610e12565b34801561061457600080fd5b506102e56004803603602081101561062b57600080fd5b5035610e21565b34801561063e57600080fd5b506103be6004803603604081101561065557600080fd5b506001600160a01b0381358116916020013516610e95565b34801561067957600080fd5b506102e56004803603604081101561069057600080fd5b506001600160a01b038135169060200135610efd565b3480156106b257600080fd5b506106e9600480360360608110156106c957600080fd5b506001600160a01b03813581169160208101359091169060400135610f74565b604080519115158252519081900360200190f35b34801561070957600080fd5b506102e56004803603602081101561072057600080fd5b810190602081018135600160201b81111561073a57600080fd5b82018360208201111561074c57600080fd5b803590602001918460018302840111600160201b8311171561076d57600080fd5b509092509050610ff5565b34801561078457600080fd5b506102e5611083565b34801561079957600080fd5b506102e5600480360360408110156107b057600080fd5b506001600160a01b0381351690602001356110ff565b33600090815260016020819052604090912080549101549091565b60006107ee8533866111cb565b60405180602f612f1a823960405190819003602f019020979650505050505050565b60006108f78861085587878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061136392505050565b888a60405160200180856001600160a01b03166001600160a01b031660601b8152601401848152602001838152602001826001600160581b0319166001600160581b03191681526015019450505050506040516020818303038152906040528051906020012084848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506113e992505050565b905061093c8888888489898080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061151c92505050565b5050505050505050565b61094f83610e12565b61099683600060581b343386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061157292505050565b505050565b600095945050505050565b6001600160a01b0381166000908152602081905260408120606091829190805b6003830154811015610a02578260030181815481106109e157fe5b600091825260209091206002600390920201015491909101906001016109c6565b606082604051908082528060200260200182016040528015610a2e578160200160208202803883390190505b509050606083604051908082528060200260200182016040528015610a5d578160200160208202803883390190505b5060038601546000945090915083905b80851015610b2f576000876003018681548110610a8657fe5b600091825260208220600260039092020190810154909250905b81811015610b2157825487516001600160a01b0390911690889087908110610ac457fe5b60200260200101906001600160a01b031690816001600160a01b031681525050826002018181548110610af357fe5b9060005260206000200154868681518110610b0a57fe5b602090810291909101015260019485019401610aa0565b505060019095019450610a6d565b50919650945050505050915091565b610b818585853386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061151c92505050565b5050505050565b6001600160a01b03811660009081526020818152604091829020600181015483518181528184028101909301909352606092839283918015610bd4578160200160208202803883390190505b50905060608151604051908082528060200260200182016040528015610c04578160200160208202803883390190505b50825190915060005b81811015610caf57846001018181548110610c2457fe5b600091825260209091206002909102015484516001600160a01b0390911690859083908110610c4f57fe5b60200260200101906001600160a01b031690816001600160a01b031681525050846001018181548110610c7e57fe5b906000526020600020906002020160010154838281518110610c9c57fe5b6020908102919091010152600101610c0d565b5091945092505050915091565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038416916323b872dd9160648083019260209291908290030181600087803b158015610d1157600080fd5b505af1158015610d25573d6000803e3d6000fd5b505050506040513d6020811015610d3b57600080fd5b50610d4990503383836118cd565b5050565b610d583383836119b6565b610d935760405162461bcd60e51b815260040180806020018281038252602e815260200180612f49602e913960400191505060405180910390fd5b6040805163a9059cbb60e01b81523360048201526024810183905290516001600160a01b0384169163a9059cbb9160448083019260209291908290030181600087803b158015610de257600080fd5b505af1158015610df6573d6000803e3d6000fd5b505050506040513d6020811015610e0c57600080fd5b50505050565b610e1e816000346118cd565b50565b610e2d336000836119b6565b610e685760405162461bcd60e51b815260040180806020018281038252602e815260200180612f49602e913960400191505060405180910390fd5b604051339082156108fc029083906000818181858888f19350505050158015610d49573d6000803e3d6000fd5b6001600160a01b0380821660009081526020818152604080832093861683529083905281205490919080610ece57600092505050610ef7565b816001016001820381548110610ee057fe5b906000526020600020906002020160010154925050505b92915050565b604080516323b872dd60e01b81523360048201523060248201526044810183905290516001600160a01b038416916323b872dd91606480830192600092919082900301818387803b158015610f5157600080fd5b505af1158015610f65573d6000803e3d6000fd5b50505050610d493383836111cb565b6001600160a01b0380831660009081526020818152604080832093871683526002840190915281205490919080610fb057600092505050610fee565b816003016001820381548110610fc257fe5b906000526020600020906003020160010160008581526020019081526020016000205460001415925050505b9392505050565b600080808080806060875b80881015611077576110498a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c9250611b56915050565b949d50949b50919950975095509093509150861561107257611072606086901c8486338661151c565b611000565b50505050505050505050565b33600090815260016020526040902054156110e5576040805162461bcd60e51b815260206004820152601d60248201527f50656e64696e67206d75737420626520756e696e697469616c697a6564000000604482015290519081900360640190fd5b6110ed611d54565b33600090815260016020526040902055565b61110a338383611dc8565b61115b576040805162461bcd60e51b815260206004820152601860248201527f57616c6c657420646f65736e2774206f776e20746f6b656e0000000000000000604482015290519081900360640190fd5b60408051632142170760e11b81523060048201523360248201526044810183905290516001600160a01b038416916342842e0e91606480830192600092919082900301818387803b1580156111af57600080fd5b505af11580156111c3573d6000803e3d6000fd5b505050505050565b6001600160a01b038084166000908152602081815260408083209386168352600284019091529020548061129f576040805180820182526001600160a01b03861681528151600080825260208281019094526003860193830191905090528154600181018084556000938452602093849020835160039093020180546001600160a01b0319166001600160a01b03909316929092178255828401518051919461127c92600285019290910190612def565b5050506001600160a01b0385166000908152600284016020526040902081905590505b60008260030160018303815481106112b357fe5b906000526020600020906003020190508060010160008581526020019081526020016000205460001461132d576040805162461bcd60e51b815260206004820152601d60248201527f63616e27742061646420616c7265616479206f776e656420746f6b656e000000604482015290519081900360640190fd5b60028101805460018181018355600083815260208082209093018890559254968352909201909152604090209290925550505050565b6000808061136f612e3a565b61137a856000612037565b9194509250905082156113d4576040805162461bcd60e51b815260206004820152601e60248201527f4d61727368616c6c65642076616c7565206d7573742062652076616c69640000604482015290519081900360640190fd5b6113dd816121c1565b5193505050505b919050565b60008060008060606040518060400160405280601c81526020017f19457468657265756d205369676e6564204d6573736167653a0a3332000000008152509050600081886040516020018083805190602001908083835b6020831061145f5780518252601f199092019160209182019101611440565b51815160209384036101000a60001901801990921691161790529201938452506040805180850381529382019052825192019190912092506114a6915088905060006122f7565b6040805160008152602080820180845287905260ff8616828401526060820185905260808201849052915194995092975090955060019260a080840193601f198301929081900390910190855afa158015611505573d6000803e3d6000fd5b5050604051601f1901519998505050505050505050565b6000600160f81b6001600160f81b0319601487901a60f81b1614156115515761154a83878760601c87612385565b9050611563565b61156083878760601c876123b5565b90505b80156111c3576111c386868686865b6001600160a01b03851660009081526001602052604090208054156117e457600061159c83611363565b6040805160608a811b6bffffffffffffffffffffffff191660208084019190915260348301859052605483018a90526001600160581b03198b166074840152835180840360690181526089840180865281519190920120600480835261012985019095529495509092909160a9015b611613612e3a565b81526020019060019003908161160b579050509050611631836123d9565b8160008151811061163e57fe5b602002602001018190525061165242612457565b8160018151811061165f57fe5b602002602001018190525061167343612457565b8160028151811061168057fe5b602090810291909101015261169482612457565b816003815181106116a157fe5b602090810291909101015260408051600480825260a08201909252606091816020015b6116cc612e3a565b8152602001906001900390816116c45790505090506116ea826124d5565b816000815181106116f757fe5b6020026020010181905250611714876001600160a01b0316612457565b8160018151811061172157fe5b602002602001018190525061173588612457565b8160028151811061174257fe5b60209081029190910101526117606001600160581b03198a16612457565b8160038151811061176d57fe5b6020026020010181905250600061178b611786836124d5565b6121c1565b6000015190506117d060405180606001604052806117a96000612457565b81526020016117bb89600001546123d9565b81526020016117c9846123d9565b9052612585565b865550505060018084018054909101905550505b856001600160a01b03167f4d0d890cdec30a2409c07864cb0bdbd32b2f7f57aaf8966b83df1bd2a5da33848487878660405180856001600160a01b03166001600160a01b03168152602001846001600160581b0319166001600160581b031916815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611888578181015183820152602001611870565b50505050905090810190601f1680156118b55780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a2505050505050565b806118d757610996565b6001600160a01b038084166000908152602081815260408083209386168352908390529020548061196e57506040805180820182526001600160a01b0385811680835260006020808501828152600188810180548083018083559186528486209851600290910290980180546001600160a01b03191698909716979097178655905194019390935590815290849052919091208190555b600082600101600183038154811061198257fe5b906000526020600020906002020190506119a984826001015461260590919063ffffffff16565b6001909101555050505050565b6000816119c557506001610fee565b6001600160a01b03808516600090815260208181526040808320938716835290839052902054806119fb57600092505050610fee565b6000826001016001830381548110611a0f57fe5b906000526020600020906002020190508060010154851115611a375760009350505050610fee565b6001810154611a4c908663ffffffff61265f16565b60018201819055611b495760018301805483918591600091906000198101908110611a7357fe5b600091825260208083206002909202909101546001600160a01b031683528201929092526040019020556001830180546000198101908110611ab157fe5b9060005260206000209060020201836001016001840381548110611ad157fe5b60009182526020808320845460029093020180546001600160a01b0319166001600160a01b0393841617815560019485015490850155908916825285905260408120558301805480611b1f57fe5b60008281526020812060026000199093019283020180546001600160a01b03191681556001015590555b5060019695505050505050565b6000806000806000806060600088965060008a8881518110611b7457fe5b016020015160019098019760f81c905060078114611ba657611b998b60018a036126a1565b9098509650611d48915050565b611bb08b896126a1565b9098509150611bcf8b60018c016000198d8c030163ffffffff61272e16565b92508a8881518110611bdd57fe5b016020015160019098019760f81c90508015611c0057611b998b60018a036126a1565b611c0a8b896127ae565b80995081975050508a8881518110611c1e57fe5b016020015160019098019760f81c90508015611c4157611b998b60018a036126a1565b611c4b8b896127ae565b80995081965050508a8881518110611c5f57fe5b016020015160019098019760f81c90508015611c8257611b998b60018a036126a1565b611c8c8b896127ae565b60408051600480825260a0820190925260019c50919a50919550606091602082016080803883390190505090508281600081518110611cc757fe5b602002602001018181525050611cdc876127d5565b81600181518110611ce957fe5b602002602001018181525050611cfe866127d5565b81600281518110611d0b57fe5b602002602001018181525050611d20856127d5565b81600381518110611d2d57fe5b602002602001018181525050611d42816127f9565b97505050505b92959891949750929550565b6040805160008082526020808301808552600360f81b948401948552835192946003938593919260418501929091028083838a5b83811015611da0578181015183820152602001611d88565b5050505090500192505050604051602081830303815290604052805190602001209150505b90565b6001600160a01b0380841660009081526020818152604080832093861683526002840190915281205490919080611e0457600092505050610fee565b6000826003016001830381548110611e1857fe5b600091825260208083208884526001600390930201918201905260409091205490915080611e4d576000945050505050610fee565b60028201805482916001850191600091906000198101908110611e6c57fe5b600091825260208083209091015483528201929092526040019020556002820180546000198101908110611e9c57fe5b9060005260206000200154826002016001830381548110611eb957fe5b600091825260208083209091019290925587815260018401909152604081205560028201805480611ee657fe5b60008281526020812082016000199081019190915501905560028201546120295760038401805484916002870191600091906000198101908110611f2657fe5b60009182526020808320600392830201546001600160a01b031684528301939093526040909101902091909155840180546000198101908110611f6557fe5b9060005260206000209060030201846003016001850381548110611f8557fe5b60009182526020909120825460039092020180546001600160a01b0319166001600160a01b0390921691909117815560028083018054611fc89284019190612e68565b5050506001600160a01b038716600090815260028501602052604081205560038401805480611ff357fe5b60008281526020812060036000199093019283020180546001600160a01b0319168155906120246002830182612ea8565b505090555b506001979650505050505050565b600080612042612e3a565b84518410612097576040805162461bcd60e51b815260206004820152601960248201527f44617461206f6666736574206f7574206f6620626f756e647300000000000000604482015290519081900360640190fd5b600084905060008682815181106120aa57fe5b016020015160019092019160f81c905060006120c4612ec6565b60ff83166120f8576120d689856127ae565b90945091506000846120e784612457565b919850965094506121ba9350505050565b60ff83166001141561211f5761210e89856128b9565b90945090506000846120e783612a26565b60ff8316600214156121465761213589856127ae565b90945091506000846120e7846123d9565b600360ff84161080159061215d5750600c60ff8416105b1561219a57600219830160606000612176838d89612a86565b909850925090508087612188846124d5565b995099509950505050505050506121ba565b8260ff166127100160006121ae6000612457565b91985096509450505050505b9250925092565b6121c9612eed565b6060820151600c60ff9091161061221b576040805162461bcd60e51b8152602060048201526011602482015270496e76616c6964207479706520636f646560781b604482015290519081900360640190fd5b606082015160ff1661224857604051806020016040528061223f84600001516127d5565b905290506113e4565b606082015160ff166001141561228f57604051806020016040528061223f846020015160000151856020015160400151866020015160600151876020015160200151612b41565b606082015160ff16600214156122b457506040805160208101909152815181526113e4565b600360ff16826060015160ff16101580156122d857506060820151600c60ff909116105b156122f557604051806020016040528061223f8460400151612be9565bfe5b604180820283810160208101516040820151919093015160ff169291601b84101561232357601b840193505b8360ff16601b148061233857508360ff16601c145b61237d576040805162461bcd60e51b8152602060048201526011602482015270496e636f727265637420762076616c756560781b604482015290519081900360640190fd5b509250925092565b6000612392858484611dc8565b61239e575060006123ad565b6123a98484846111cb565b5060015b949350505050565b60006123c28584846119b6565b6123ce575060006123ad565b6123a98484846118cd565b6123e1612e3a565b604080516080808201835284825282519081018352600080825260208281018290528285018290526060830182905280840192909252835181815291820184529192830191612446565b612433612e3a565b81526020019060019003908161242b5790505b508152600260209091015292915050565b61245f612e3a565b6040805160808082018352848252825190810183526000808252602082810182905282850182905260608301829052808401929092528351818152918201845291928301916124c4565b6124b1612e3a565b8152602001906001900390816124a95790505b508152600060209091015292915050565b6124dd612e3a565b6124e78251612d35565b612538576040805162461bcd60e51b815260206004820152601a60248201527f5475706c65206d75737420686176652076616c69642073697a65000000000000604482015290519081900360640190fd5b5060408051608080820183526000808352835191820184528082526020828101829052828501829052606080840192909252830191909152918101839052915160030160ff169082015290565b6040805160038082526080820190925260009160609190816020015b6125a9612e3a565b8152602001906001900390816125a1575050805190915060005b818110156125fb578481600381106125d757fe5b60200201518382815181106125e857fe5b60209081029190910101526001016125c3565b506123ad82612be9565b600082820183811015610fee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000610fee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612d3c565b6000806000806126af612e3a565b6126b98787612037565b919450925090508215612713576040805162461bcd60e51b815260206004820152601e60248201527f4d61727368616c6c65642076616c7565206d7573742062652076616c69640000604482015290519081900360640190fd5b8161271d826121c1565b5190955093505050505b9250929050565b60608183018451101561274057600080fd5b60608215801561275b576040519150602082016040526127a5565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561279457805183526020928301920161277c565b5050858452601f01601f1916604052505b50949350505050565b60008082816127c3868363ffffffff612dd316565b60209290920196919550909350505050565b60408051602080820193909352815180820384018152908201909152805191012090565b6000600882511115612849576040805162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e8eae0d8ca40d8cadccee8d60631b604482015290519081900360640190fd5b8151600360ff160182604051602001808360ff1660ff1660f81b8152600101828051906020019060200280838360005b83811015612891578181015183820152602001612879565b5050505090500192505050604051602081830303815290604052805190602001209050919050565b60006128c3612ec6565b600083905060008582815181106128d657fe5b602001015160f81c60f81b60f81c9050818060010192505060008683815181106128fc57fe5b016020015160019384019360f89190911c915060009060ff8416141561299a576000612926612e3a565b6129308a87612037565b9097509092509050811561298b576040805162461bcd60e51b815260206004820152601e60248201527f4d61727368616c6c65642076616c7565206d7573742062652076616c69640000604482015290519081900360640190fd5b612994816121c1565b51925050505b60006129ac898663ffffffff612dd316565b90506020850194508360ff16600114156129f1576040805160808101825260ff9094168452602084019190915260019083015260608201529193509091506127279050565b6040805160808101825260ff909416845260208401919091526000908301819052606083015250919350909150509250929050565b612a2e612e3a565b604080516080810182526000808252602080830186905283518281529081018452919283019190612a75565b612a62612e3a565b815260200190600190039081612a5a5790505b508152600160209091015292915050565b60008060606000849050600060608860ff16604051908082528060200260200182016040528015612ad157816020015b612abe612e3a565b815260200190600190039081612ab65790505b50905060005b8960ff168160ff161015612b2b57612aef8985612037565b8451859060ff8616908110612b0057fe5b6020908102919091010152945092508215612b2357509094509092509050612b38565b600101612ad7565b5060009550919350909150505b93509350939050565b60008315612b9b575060408051600160f81b6020808301919091526001600160f81b031960f888901b16602183015260228201859052604280830185905283518084039091018152606290920190925280519101206123ad565b5060408051600160f81b6020808301919091526001600160f81b031960f888901b16602183015260228083018590528351808403909101815260429092019092528051910120949350505050565b6000600882511115612c39576040805162461bcd60e51b8152602060048201526014602482015273092dcecc2d8d2c840e8eae0d8ca40d8cadccee8d60631b604482015290519081900360640190fd5b60608251604051908082528060200260200182016040528015612c66578160200160208202803883390190505b50805190915060005b81811015612cc257612c7f612eed565b612c9b868381518110612c8e57fe5b60200260200101516121c1565b90508060000151848381518110612cae57fe5b602090810291909101015250600101612c6f565b508351600360ff160182604051602001808360ff1660ff1660f81b8152600101828051906020019060200280838360005b83811015612d0b578181015183820152602001612cf3565b50505050905001925050506040516020818303038152906040528051906020012092505050919050565b6008101590565b60008184841115612dcb5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612d90578181015183820152602001612d78565b50505050905090810190601f168015612dbd5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008160200183511015612de657600080fd5b50016020015190565b828054828255906000526020600020908101928215612e2a579160200282015b82811115612e2a578251825591602001919060010190612e0f565b50612e36929150612eff565b5090565b604051806080016040528060008152602001612e54612ec6565b815260606020820152600060409091015290565b828054828255906000526020600020908101928215612e2a5760005260206000209182015b82811115612e2a578254825591600101919060010190612e8d565b5080546000825590600052602060002090810190610e1e9190612eff565b60408051608081018252600080825260208201819052918101829052606081019190915290565b60408051602081019091526000815290565b611dc591905b80821115612e365760008155600101612f0556fe6f6e455243373231526563656976656428616464726573732c616464726573732c75696e743235362c62797465732957616c6c657420646f65736e2774206f776e2073756666696369656e742062616c616e6365206f6620746f6b656ea265627a7a723158208ba553ad84a7271b78ec679089b3b96411c5d5145f1aba39e972765263d25c2764736f6c634300050f0032';
