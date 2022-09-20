# New Hardhat React Redux Project Setup

## 1. Install Requirements

- Install [Ganache](https://trufflesuite.com/ganache/)
- Install [Node and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- Install common packages used for smart contract developments by running:
  ```shell
  npm install
  ```
- Install commmon packages used for front-end react
  developments by running:
  ```shell
  cd client && npm install && cd ..
  ```

## 2. Setup .env file

- Change .env.temp file name and setup.

  ```shell
  mv .env.temp .env
  ```

- [INFURA](https://infura.io/)
- [Alchemy](https://www.alchemy.com/)

## 3. Sample Hardhat Project

- This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

- Try running some of the following tasks:

  ```shell
  npx hardhat help
  npx hardhat test
  GAS_REPORT=true npx hardhat test
  npx hardhat node
  npx hardhat run scripts/deploy.js
  ```
