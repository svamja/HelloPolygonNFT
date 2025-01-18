require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    testnet: {
      url: process.env.TESTNET_RPC_URL,  // Use a new provider
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
