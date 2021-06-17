// MY INFURA_ID, SWAP IN YOURS FROM https://infura.io/dashboard/ethereum
export const INFURA_ID = "3ccea23c26224daf802cf31e4699d15e";

// MY ETHERSCAN_ID, SWAP IN YOURS FROM https://etherscan.io/myapikey
export const ETHERSCAN_KEY = "PSW8C433Q667DVEX5BCRMGNAH9FSGFZ7Q8";

// BLOCKNATIVE ID FOR Notify.js:
export const BLOCKNATIVE_DAPPID = "0b58206a-f3c0-4701-a62f-73c7243e8c77";

// EXTERNAL CONTRACTS


//------ added by save script:
export const mainStreamReader_ADDRESS = "0x710644C199549925E065a551b51B848d8725Bd0A"

export const mainStreamReader_ABI = [{"inputs":[{"internalType":"address[]","name":"streams","type":"address[]"}],"name":"readStreams","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"}]

export const mainStreamReader_BYTECODE = "0x608060405234801561001057600080fd5b506103b5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063a2dd56ca14610030575b600080fd5b6100d36004803603602081101561004657600080fd5b81019060208101813564010000000081111561006157600080fd5b82018360208201111561007357600080fd5b8035906020019184602083028401116401000000008311171561009557600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610123945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561010f5781810151838201526020016100f7565b505050509050019250505060405180910390f35b60606000825160040267ffffffffffffffff8111801561014257600080fd5b5060405190808252806020026020018201604052801561016c578160200160208202803683370190505b50905060005b83518160ff161015610378576000848260ff168151811061018f57fe5b60200260200101519050806001600160a01b031663355274ea6040518163ffffffff1660e01b815260040160206040518083038186803b1580156101d257600080fd5b505afa1580156101e6573d6000803e3d6000fd5b505050506040513d60208110156101fc57600080fd5b50518351849060ff600486021690811061021257fe5b602002602001018181525050806001600160a01b031663ead50da36040518163ffffffff1660e01b815260040160206040518083038186803b15801561025757600080fd5b505afa15801561026b573d6000803e3d6000fd5b505050506040513d602081101561028157600080fd5b50518351849060ff600160048702011690811061029a57fe5b602002602001018181525050806001600160a01b031663c3ae1e596040518163ffffffff1660e01b815260040160206040518083038186803b1580156102df57600080fd5b505afa1580156102f3573d6000803e3d6000fd5b505050506040513d602081101561030957600080fd5b50518351849060ff600260048702011690811061032257fe5b602002602001018181525050848260ff168151811061033d57fe5b60200260200101516001600160a01b031631838360040260030160ff168151811061036457fe5b602090810291909101015250600101610172565b509291505056fea264697066735822122067e7dc07f621168ef11fadbf0eaa64166f656ecaaa2a8b492bb201804eeb98f064736f6c63430007060033"


export const SIMPLE_STREAM_ABI = [{"inputs":[{"internalType":"address payable","name":"_toAddress","type":"address"},{"internalType":"uint256","name":"_cap","type":"uint256"},{"internalType":"uint256","name":"_frequency","type":"uint256"},{"internalType":"bool","name":"_startsFull","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"reason","type":"string"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"frequency","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"last","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"streamBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"reason","type":"string"}],"name":"streamDeposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"reason","type":"string"}],"name":"streamWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"toAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]


export const DAI_ADDRESS = "0x6B175474E89094C44Da98b954EedeAC495271d0F"

export const DAI_ABI = [
  {
    inputs: [{ internalType: "uint256", name: "chainId_", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "guy", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      { indexed: true, internalType: "bytes4", name: "sig", type: "bytes4" },
      { indexed: true, internalType: "address", name: "usr", type: "address" },
      { indexed: true, internalType: "bytes32", name: "arg1", type: "bytes32" },
      { indexed: true, internalType: "bytes32", name: "arg2", type: "bytes32" },
      { indexed: false, internalType: "bytes", name: "data", type: "bytes" },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "src", type: "address" },
      { indexed: true, internalType: "address", name: "dst", type: "address" },
      { indexed: false, internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "address", name: "", type: "address" },
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "burn",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "guy", type: "address" }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "src", type: "address" },
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "move",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "nonces",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "holder", type: "address" },
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "nonce", type: "uint256" },
      { internalType: "uint256", name: "expiry", type: "uint256" },
      { internalType: "bool", name: "allowed", type: "bool" },
      { internalType: "uint8", name: "v", type: "uint8" },
      { internalType: "bytes32", name: "r", type: "bytes32" },
      { internalType: "bytes32", name: "s", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "pull",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "usr", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "push",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "guy", type: "address" }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "address", name: "src", type: "address" },
      { internalType: "address", name: "dst", type: "address" },
      { internalType: "uint256", name: "wad", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "version",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "wards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
];



  export const BUILDS = [
    {
      name: "🎟 Simple NFT Example",
      desc: "Mint and display NFTs on Ethereum with a full example app...",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/simple-nft-example",
      readMore: "",
      image: "simplenft.png"
    },
    {
      name: "🧾 Minimum Viable Payment Channel",
      desc: "Make micro payments in ETH with signatures over a open session",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/payment-channel",
      readMore: "",
      image: "paymentchannel.png"
    },
    {
      name: "📈 Bonding Curve",
      desc: "Learn about bonding curves and play around with the 😃 bonding curve token",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/bonding-curve",
      readMore: "",
      image: "bondingcurve.png"
    },
    {
      name: "🏷 ✍️ NFT Signature Based Auction",
      desc: "Discover how you can build your own NFT auction where the bids go off-chain!",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/signature-nft-auction",
      readMore: "",
      image: "highestbid.png"
    },
    {
      name: "👻 Lender",
      desc: "A component for depositing & borrowing assets on Aave",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/lender",
      readMore: "https://azfuller20.medium.com/lend-with-aave-v2-20bacceedade",
      image: "lender.png"
    },
    {
      name: "🐸 Chainlink 🎲 VRF 🎫 NFT",
      desc: "Use VRF to get a 🎲 random \"⚔️ strength\" for each NFT as it is minted...",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/chainlink-vrf-nft",
      readMore: "https://youtu.be/63sXEPIEh-k?t=1773",
      image: "randomimage.png"
    },
    {
      name: "💵 Meta-Multi-Sig Wallet",
      desc: "An off-chain signature-based multi-sig wallet",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/meta-multi-sig",
      readMore: "",
      image: "metamultisig.png"
    },
    {
      name: "🎨 Nifty.ink",
      desc: "NFT artwork platform powered by meta transactions, burner wallets, sidechains, and bridged to Ethereum.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/nifty-ink-dev",
      readMore: "https://nifty.ink",
      image: "niftyink.png"
    },
    {
      name: "⏳ Simple Stream",
      desc: "A simple ETH stream where the beneficiary reports work via links when they withdraw.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/simple-stream",
      readMore: "",
      image: "simplestream.png"
    },
    {
      name: "🧑‍🎤 PunkWallet.io",
      desc: "A quick web wallet for demonstrating identity of keypairs and sending around ETH.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/punk-wallet",
      readMore: "https://punkwallet.io",
      image: "punkwallet.png"
    },
    {
      name: "👛 Streaming Meta Multi Sig",
      desc: "An off-chain signature based multi sig with streaming.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/streaming-meta-multi-sig",
      readMore: "https://bank.buidlguidl.com/streams",
      image: "smms.png"
    },
    {
      name: "🔴 Optimism Starter Pack",
      desc: "A 🏗 scaffold-eth dev stack for 🔴 Optimism",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/local-optimism",
      readMore: "https://azfuller20.medium.com/optimism-scaffold-eth-draft-b76d3e6849e8",
      image: "op.png"
    },
    {
      name: "⚖️ Uniswapper",
      desc: "A component for swapping erc20s on Uniswap (plus tokenlists + local forks of mainnet!)",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/uniswapper",
      readMore: "https://azfuller20.medium.com/swap-with-uniswap-wip-f15923349b3d",
      image: "uniswapper.png"
    },
    {
      name: "👨‍🎤 xNFT.io",
      desc: "A fork of 🎨 Nifty.ink with file uploads.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/xnft",
      image: "xnft.jpg"
    },
    {
      name: "👨‍👦 Minimal Proxy",
      desc: "A clever workaround where you can deploy the same contract thousands of times with minimal deployment costs",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/minimal_proxy",
      readMore: "",
      image: "proxy.png"
    },
    {
      name: "🍯 Honeypot",
      desc: "How you can catch hackers by putting bait into your \"vulnerable\" smart contract 🤭",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/honeypot-example",
      readMore: "",
      image: "honeypot.png"
    },
    {
      name: "😈 Denial of Service",
      desc: "Make contract unusable by exploiting external calls",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/denial-of-service-example",
      readMore: "",
      image: "dos.png"
    },
    {
      name: "⚡️ Aave Flash Loans Intro",
      desc: "Learn how to borrow any available amount of assets without putting up any collateral and build a simple arbitrage bot that would trade between Uniswap and Sushiswap pools.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/flash-loans-intro",
      readMore: "",
      image: "flash.png"
    },
    {
      name: "🧾 rTokens",
      desc: "tokens that represent redirected yield from lending",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/defi-rtokens",
      readMore: "",
      image: "rokens.png"
    },
    {
      name: "🌱 radwallet.io",
      desc: "A simple web wallet to send around Rad tokens (ERC20 on mainnet).",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/radwallet",
      readMore: "https://radwallet.io",
      image: "radwallet.png"
    },

    {
      name: "🌐 GTGS Voice Gems",
      desc: "NFT \"shards\" collected from original \"Voice Gems\" for the Global Technology and Governance Summit.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/gtgs-voice-gems",
      readMore: "https://gtgs.io",
      image: "gtgs.png"
    },
    {
      name: "🐊 Token Allocator",
      desc: "Allocator.sol distributes tokens to addresses on a ratio defined by Governor.sol",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/new-allocator",
      readMore: "",
      image: "allocator.png"
    },
    {
      name: "💎 Diamond Standard exploration",
      desc: "Diamond standard in 🏗 scaffold-eth?",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/diamond-standard",
      readMore: "",
      image: "diamond.png"
    },
    {
      name: "🔮 Chainlink Example",
      desc: "oracles and vrf",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/chainlink-tutorial-1",
      readMore: "",
      image: "vrf.png"
    },
    {
      name: "🦍 Aave Ape",
      desc: "A helper contract that lets you go long on the Aave asset of your choice.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/aave-ape",
      readMore: "https://www.youtube.com/watch?v=4uAzju3efqY",
      image: "ape.png"
    },
    {
      name: "🔴 Optimism 🎟 NFTs ",
      desc: "A \"buyer mints\" NFT gallery running on Optimism",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/optimistic-nft-dev-session",
      readMore: "",
      image: "opnfts.png"
    },
    {
      name: "🎫 Nifty Viewer",
      desc: "A forkable nft gallery with transfer functionality and burner wallets.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/nifty-viewer",
      readMore: "",
      image: "niftyview.png"
    },

    {
      name: "✍️ Signator.io",
      desc: "Sign a message with an Ethereum account & generate shareable proof-of-signature links.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/signatorio",
      readMore: "http://signator.io",
      image: "signatorio.png"
    },
    {
      name: "💰 Emoji Support",
      desc: "Funding round that uses quadratic matching (capital-constrained liberal radicalism).",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/emoji-support",
      readMore: "http://emoji.support",
      image: "emojisupport.png"
    },
    {
      name: "🏷 NFT Auction",
      desc: "Discover how you can build your own NFT auction where the highest bid gets an NFT!",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/nft-auction",
      readMore: "",
      image: "highestbid.png"
    },
    {
      name: "🌲 Merkle Mint NFTs",
      desc: "Use a Merkle tree of possible artworks and then submit a proof it is valid to mint.",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/merkle-root-buyer-mints",
      readMore: "",
      image: "merklenft.png"
    },
    {
      name: "🎲 Push The Button",
      desc: "A base template for multiplayer turn-based game on Ethereum",
      branch: "https://github.com/austintgriffith/scaffold-eth/tree/push-the-button-dev",
      readMore: "",
      image: "push.png"
    },

    /*
    {
      name: "",
      desc: "",
      branch: "",
      readMore: "",
      image: ""
    }*/
  ]





//--------------------------------------------------------------------------------------------------------------------------------------------




export const BUILDERS = [
  {
    name: "pabloruiz.eth",
    role: "React + Solidity",
    address: "0xfd4c0f5848642fc2041c003cb684fc66b16217bc",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=pabloruiz55",
    builds: [ ],
    streamAddress: "0xB3A51b63B7f1Bcb8600FF67E4a69C7B690994a89",//"0x90FC815Fe9338BB3323bAC84b82B9016ED021e70",
    streamUrl: "http://pabloruiz.buidlguidl.com"
  },
  {
    name: "togzhan.eth",
    role: "React + Solidity",
    address: "0x50eccad809d553335a8eb7bfec2cee5a6f2cde43",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=btogzhan2000",
    builds: [ ],
    streamAddress: "0x3B60b34Aa5dEAFF586D3841AD62b4aa730e11ceC",//"0x90FC815Fe9338BB3323bAC84b82B9016ED021e70",
    streamUrl: "http://togzhan.buidlguidl.com"
  },
  {
    name: "ironsoul.eth",
    role: "React + Solidity",
    address: "0x1e2ce012b27d0c0d3e717e943ef6e62717cec4ea",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=ironsoul0",
    builds: [ "xnft", "honeypot", "dos", "flash", "highestbid", "merklenft", "paymentchannel"],
    streamAddress: "0xDbcD66b510191cD0539F7FAe8cD981B82Ee2006f",//"0x90FC815Fe9338BB3323bAC84b82B9016ED021e70",
    streamUrl: "http://ironsoul.buidlguidl.com"
  },
  {
    name: "viraz.eth",
    role: "Solidity + React",
    address: "0x2DdA8dc2f67f1eB94b250CaEFAc9De16f70c5A51",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=viraj124",
    builds: [ "xnft", "proxy", "diamond", "highestbid", "merklenft", "paymentchannel", "bondingcurve"],
    streamAddress: "0x974a061A8cE5a2b07cB3f1D356Bb01Daaa9eC31d",//"0x21e18260357D33d2e18482584a8F39D532fb71cC",
    streamUrl: "http://viraz.buidlguidl.com"
  },
  {
    name: "sadda11asm.eth",
    role: "Solidity + React",
    address: "0x7b945ffe9725d8e05343bec36c0eced294097f78",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=ironsoul0",
    builds: [ "xnft", "rokens", "highestbid", "merklenft", "paymentchannel"],
    streamAddress: "0x1eB6Da6F03B6D3C0d8da0B127388Add4d78Eb652",//"0xd116179A26F7b36Ed7B3334679aD0B2ec8c5ec22",
    streamUrl: "http://sadda11asm.buidlguidl.com"
  },
  {
    name: "amogh.eth",
    role: "Solidity + React",
    address: "0x1245e96fe32B43dDEc930D662B5d20239282b876",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=amogh-jrules",
    builds: ["smms", "push", "metamultisig"],
    streamAddress: "0xA267be6eF185f7563354e90882c1d3332455B8F8",//"0x298F4Af778954d771A6Fc6098AFc0a19f35d3dAA",
    streamUrl: "http://amogh.buidlguidl.com",
  },
  {
    name: "calvinquin.argent.xyz",
    role: "Solidity + React",
    address: "0x614ae4c6eb91cec9e6e178549c0745a827212b24",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=calvbore",
    builds: [],
    streamAddress: "0x864Fa2F20e414c9534B1DE567a30a77436c7a745",//"0x0dE7a22627b68F51bBE22f408e009146D6c56ee1",
    streamUrl: "http://calvinquin.buidlguidl.com",
  },

  {
    name: "ssteiger.eth",
    role: "React",
    address: "0x4ceb8dC70813fFbB2d8d6DC0755086698F977613",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=ssteiger",
    builds: [
      "ethdev",
    ],
    streamAddress: "0x24aAc13141DbE8946433215bfdc793C2B71398c8",//"0x271C2Fb694F38bE3FA7e6374D349A714c7E8Bba7",//streamAddress: "0x7D6DAdfb6df8ebe6fCB1C32af55252F04D79Df85",
    streamUrl: "http://ssteiger.buidlguidl.com",
  },
  {
    name: "rawcipher.eth",
    role: "Community Support",
    address: "0xa4ca1b15fe81f57cb2d3f686c7b13309906cd37b",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=codenamejason",
    builds: [ "vrf" ],
    streamAddress: "0x733F7E1aEdC49c7c777c29C4bE2eB772666552F4",//"0x1B8bB82bF08D69bDFb0287F6C16Fa739Aa6e95f2",//"0x45283840c879DBA341170FaFA62542F7714BFE8f",
    streamUrl: "http://rawcipher.buidlguidl.com",//rawcipherstream.surge.sh
  },
  {
    name: "mrdee.eth",
    role: "Artwork",
    address: "0xd2f016809969b4105978fDD5b112CD95bFDd6814",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=azf20",
    builds: [],
    streamAddress: "0xD31aDDE3c6659653f5BdCb237afB353155db1567",//"0xF48BECEa4C65F0c2F3841ed00E813298C8B327ab",
    streamUrl: "http://mrdee.buidlguidl.com",
  },
  {
    name: "pileofscraps.eth",
    role: " Solidity + React ",
    address: "0x5c43B1eD97e52d009611D89b74fA829FE4ac56b1",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=pileofscraps",
    builds: [  ],
    streamAddress: "0x0A9eDE9A66683F23d369FC6bAAA9D1fa7198Ebf2",//dup"0x2eC099fE9547A1Ac760Bd1C9bBE710218624Bf3f"//"0x2eC099fE9547A1Ac760Bd1C9bBE710218624Bf3f",
    streamUrl: "http://pileofscraps.buidlguidl.com/",
  },
  {
    name: "hunterchang.eth",
    role: "React",
    address: "0xf7e89E45502890381F9242403eA8661fad89Ca79",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=azf20",
    builds: [ "xnft", ],
    streamAddress: "0x560Dd59ED235446d04da7C907289E3f88e685447",//dup"0x2eC099fE9547A1Ac760Bd1C9bBE710218624Bf3f"//"0x2eC099fE9547A1Ac760Bd1C9bBE710218624Bf3f",
    streamUrl: "http://hunterchang.buidlguidl.com",
  },

  {
    name: "adamfuller.eth",
    role: "Solidity + React",
    address: "0x60Ca282757BA67f3aDbF21F3ba2eBe4Ab3eb01fc",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=azf20",
    builds: [
      "niftyink", "uniswapper", "lender", "ape", "op", "signatorio"
    ],
    streamAddress: "0x754A8a09Eae2FFEFbDE706a6ed40C0f0F3c58d7e",//"0xdC1d9454CBa690E0a33abeB08de1DD6921b15759",//"0x79Eeda2a3cdB90129A3Dc851556AeaF25DdF1E39",
    streamUrl: "http://adamfuller.buidlguidl.com",
  },

  {
    name: "austingriffith.eth",
    role: "Mentor",
    address: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    github: "https://github.com/austintgriffith/scaffold-eth/commits?author=austintgriffith",
    builds: [
      "niftyink", "simplestream", "niftyview", "opnfts", "smms", "allocator", "radwallet", "punkwallet", "simplenft", "randomimage", "gtgs"
    ],
    streamAddress: "0x518Af5F20bf07C882e17731207761C174AB4F9c4",//"0xb0D25772CB076cb4cE90a0c4dfdba6Cad07921a1",
    streamUrl: "http://austingriffith.buidlguidl.com",
  },

]
























export const NETWORK = chainId => {
  for (const n in NETWORKS) {
    if (NETWORKS[n].chainId === chainId) {
      return NETWORKS[n];
    }
  }
};

export const NETWORKS = {
  localhost: {
    name: "localhost",
    color: "#666666",
    chainId: 31337,
    blockExplorer: "",
    rpcUrl: "http://" + window.location.hostname + ":8545",
  },
  mainnet: {
    name: "mainnet",
    color: "#ff8b9e",
    chainId: 1,
    rpcUrl: `https://mainnet.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://etherscan.io/",
  },
  kovan: {
    name: "kovan",
    color: "#7003DD",
    chainId: 42,
    rpcUrl: `https://kovan.infura.io/v3/${INFURA_ID}`,
    blockExplorer: "https://kovan.etherscan.io/",
    faucet: "https://gitter.im/kovan-testnet/faucet", // https://faucet.kovan.network/
  },
  rinkeby: {
    name: "rinkeby",
    color: "#e0d068",
    chainId: 4,
    rpcUrl: `https://rinkeby.infura.io/v3/${INFURA_ID}`,
    faucet: "https://faucet.rinkeby.io/",
    blockExplorer: "https://rinkeby.etherscan.io/",
  },
  ropsten: {
    name: "ropsten",
    color: "#F60D09",
    chainId: 3,
    faucet: "https://faucet.ropsten.be/",
    blockExplorer: "https://ropsten.etherscan.io/",
    rpcUrl: `https://ropsten.infura.io/v3/${INFURA_ID}`,
  },
  goerli: {
    name: "goerli",
    color: "#0975F6",
    chainId: 5,
    faucet: "https://goerli-faucet.slock.it/",
    blockExplorer: "https://goerli.etherscan.io/",
    rpcUrl: `https://goerli.infura.io/v3/${INFURA_ID}`,
  },
  xdai: {
    name: "xdai",
    color: "#48a9a6",
    chainId: 100,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://dai.poa.network",
    faucet: "https://xdai-faucet.top/",
    blockExplorer: "https://blockscout.com/poa/xdai/",
  },
  matic: {
    name: "matic",
    color: "#2bbdf7",
    chainId: 137,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mainnet.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://explorer-mainnet.maticvigil.com//",
  },
  mumbai: {
    name: "mumbai",
    color: "#92D9FA",
    chainId: 80001,
    price: 1,
    gasPrice: 1000000000,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    faucet: "https://faucet.matic.network/",
    blockExplorer: "https://mumbai-explorer.matic.today/",
  },
};
