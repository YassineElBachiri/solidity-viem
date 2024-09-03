# Smart Contract Deployment and Testing with Viem

This project demonstrates how to deploy and test smart contracts on Ethereum-compatible networks using the Viem TypeScript library.

## Table of Contents

- [Introduction](#introduction)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Contracts Overview](#contracts-overview)
- [Deployment Process](#deployment-process)
- [Contributing](#contributing)

## Introduction

This repository showcases a collection of smart contracts deployed and tested using Viem, a TypeScript library for interacting with Ethereum-compatible blockchains. The project includes various contract implementations, deployment scripts, and comprehensive tests written in TypeScript.

## Project Structure
src/ ├── contracts/ # Solidity source files └── types/ # TypeScript type definitions test/ ├── Ballot.t.ts # Test file for Ballot contract ├── EventTest.t.ts # Test file for event handling └── TokenSale.t.ts # Test file for token sale functionality scripts/ └── deploy.ts # Script for deploying contracts package.json # Project dependencies hardhat.config.ts # Hardhat configuration README.md # This file


## Requirements

- Node.js >= 14.17.0
- npm >= 6.14.13
- Hardhat
- Viem TypeScript library

## Installation

1. Clone the repository:
  ``` git clone https://github.com/YassineElBachiri/solidity-viem.git ```


2. Install dependencies:

    ```npm install ```


3. Set up your environment variables:
   - Create a `.env` file in the root directory
   - Add your Alchemy API key and private key

        ALCHEMY_API_KEY=your-alchemy-api-key PRIVATE_KEY=your-private-key


## Usage

To deploy the contracts:

npx hardhat run scripts/deploy.ts --network sepolia


Replace `sepolia` with your desired network (e.g., mainnet, goerli).

## Testing

Run the tests:

npx hardhat test


## Contracts Overview

The project includes several smart contracts:

1. **Ballot**: Implements a voting system with features like proposing options, voting, and delegating votes.
2. **MyToken**: An ERC20 token implementation used in the TokenSale contract.
3. **MyNft**: An ERC721 NFT implementation used in the TokenSale contract.
4. **TokenSale**: Combines MyToken and MyNft to create a shop where users can buy tokens or NFTs.

## Deployment Process

The `deploy.ts` script uses Viem to deploy the contracts:

1. It sets up a public client and wallet clients.
2. Deploys each contract individually.
3. Returns the addresses of deployed contracts.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request with improvements or additional features.

Before contributing, please ensure you've read our code of conduct and contribution guidelines.

### How to Contribute

1. Fork this repository
2. Create a new branch (`git checkout -b feature/SaleToken`)
3. Make changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/SaleToken`)
5. Open a Pull Request

## License

GPL-3.0