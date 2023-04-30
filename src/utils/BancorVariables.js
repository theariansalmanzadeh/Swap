export const abi = [
  {
    inputs: [
      {
        internalType: "contract IBancorNetwork",
        name: "initNetwork",
        type: "address",
      },
      {
        internalType: "contract ITokenGovernance",
        name: "initBNTGovernance",
        type: "address",
      },
      {
        internalType: "contract ITokenGovernance",
        name: "initVBNTGovernance",
        type: "address",
      },
      {
        internalType: "contract INetworkSettings",
        name: "initNetworkSettings",
        type: "address",
      },
      {
        internalType: "contract IMasterVault",
        name: "initMasterVault",
        type: "address",
      },
      {
        internalType: "contract IExternalProtectionVault",
        name: "initExternalProtectionVault",
        type: "address",
      },
      {
        internalType: "contract IExternalRewardsVault",
        name: "initExternalRewardsVault",
        type: "address",
      },
      {
        internalType: "contract IBNTPool",
        name: "initBNTPool",
        type: "address",
      },
      {
        internalType: "contract IPendingWithdrawals",
        name: "initPendingWithdrawals",
        type: "address",
      },
      {
        internalType: "contract IPoolMigrator",
        name: "initPoolMigrator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "AlreadyInitialized", type: "error" },
  { inputs: [], name: "InvalidAddress", type: "error" },
  { inputs: [], name: "InvalidParam", type: "error" },
  { inputs: [], name: "InvalidToken", type: "error" },
  { inputs: [], name: "ZeroValue", type: "error" },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "bytes32", name: "role", type: "bytes32" },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bnt",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bntGovernance",
    outputs: [
      { internalType: "contract ITokenGovernance", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bntPool",
    outputs: [{ internalType: "contract IBNTPool", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "depositingEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "externalProtectionVault",
    outputs: [
      {
        internalType: "contract IExternalProtectionVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "externalRewardsVault",
    outputs: [
      {
        internalType: "contract IExternalRewardsVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "uint256", name: "index", type: "uint256" },
    ],
    name: "getRoleMember",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes32", name: "role", type: "bytes32" }],
    name: "getRoleMemberCount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "hasRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "isPoolStable",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "id", type: "uint256" }],
    name: "isReadyForWithdrawal",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "masterVault",
    outputs: [
      { internalType: "contract IMasterVault", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "network",
    outputs: [
      { internalType: "contract IBancorNetwork", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "networkSettings",
    outputs: [
      { internalType: "contract INetworkSettings", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingWithdrawals",
    outputs: [
      {
        internalType: "contract IPendingWithdrawals",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolMigrator",
    outputs: [
      { internalType: "contract IPoolMigrator", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "poolToken",
    outputs: [
      { internalType: "contract IPoolToken", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract Token", name: "pool", type: "address" },
      { internalType: "uint256", name: "poolTokenAmount", type: "uint256" },
    ],
    name: "poolTokenToUnderlying",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes", name: "data", type: "bytes" }],
    name: "postUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "role", type: "bytes32" },
      { internalType: "address", name: "account", type: "address" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleAdmin",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "stakedBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "bytes4", name: "interfaceId", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract Token", name: "sourceToken", type: "address" },
      { internalType: "contract Token", name: "targetToken", type: "address" },
      { internalType: "uint256", name: "targetAmount", type: "uint256" },
    ],
    name: "tradeInputByTargetAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract Token", name: "sourceToken", type: "address" },
      { internalType: "contract Token", name: "targetToken", type: "address" },
      { internalType: "uint256", name: "sourceAmount", type: "uint256" },
    ],
    name: "tradeOutputBySourceAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "tradingEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "tradingFeePPM",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "contract Token", name: "pool", type: "address" }],
    name: "tradingLiquidity",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "bntTradingLiquidity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "baseTokenTradingLiquidity",
            type: "uint128",
          },
        ],
        internalType: "struct TradingLiquidity",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract Token", name: "pool", type: "address" },
      { internalType: "uint256", name: "tokenAmount", type: "uint256" },
    ],
    name: "underlyingToPoolToken",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vbnt",
    outputs: [{ internalType: "contract IERC20", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vbntGovernance",
    outputs: [
      { internalType: "contract ITokenGovernance", name: "", type: "address" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract Token", name: "pool", type: "address" },
      { internalType: "uint256", name: "poolTokenAmount", type: "uint256" },
    ],
    name: "withdrawalAmounts",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "totalAmount", type: "uint256" },
          { internalType: "uint256", name: "baseTokenAmount", type: "uint256" },
          { internalType: "uint256", name: "bntAmount", type: "uint256" },
        ],
        internalType: "struct WithdrawalAmounts",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export const bancorAddress = "0x8E303D296851B320e6a697bAcB979d13c9D6E760";
export const EthAddress = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
