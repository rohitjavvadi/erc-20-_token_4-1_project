require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");


module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: "./client/src/artifacts",
  },
  networks: {
    rinkeby: {
      url: process.env.INFURA_RINKEBY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
    },
    // goerli: {
    //   url: process.env.INFURA_GOERLI_ENDPOINT,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};
