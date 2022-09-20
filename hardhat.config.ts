import { HardhatUserConfig } from "hardhat/config";
import 'hardhat-deploy';
import '@typechain/hardhat'
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv"

dotenv.config()

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      // // If you want to do some forking, uncomment this
      // forking: {
      //   url: MAINNET_RPC_URL
      // }
    },
    localhost: {},
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: [`${process.env.TEST_DEPLOY_PRIVATE_KEY}`],
      live: true,
      saveDeployments: true,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA_TOKEN}`,
      accounts: [`${process.env.TEST_DEPLOY_PRIVATE_KEY}`],
      live: true,
      saveDeployments: true,
    },
  },
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },
  namedAccounts: {
    deployer: 0,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      }
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  mocha: {
    timeout: 400000,
  },
};


export default config;
