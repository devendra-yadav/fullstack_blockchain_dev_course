require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  gasReporter: {
    enabled: true,
    currency: "USD",
    noColors: true,
    outputFile: "gasReport.txt",
    coinmarketcap: "8587aa09-e6c4-421b-8395-c7c77e594c3e",
    token: "MATIC"
  }
};
