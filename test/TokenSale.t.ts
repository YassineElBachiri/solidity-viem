import { expect } from "chai";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { parseEther, formatEther } from "viem";

const TEST_RATIO = 10n;
const TEST_PRICE = 5n;
const TEST_BUY_AMOUNT = "10";

async function fixture() {
  const publicClient = await viem.getPublicClient();
  const myTokenContract = await viem.deployContract("MyToken", []);
  const myNftContract = await viem.deployContract("MyNFT", []);
  const tokenSaleContract = await viem.deployContract("TokenSale", [
    TEST_RATIO,
    TEST_PRICE,
    myTokenContract.address,
    myNftContract.address,
  ]);

  // Grant minter-role to instance of TokenSale Contract! NOT the deployer
  const minterRole = await myTokenContract.read.MINTER_ROLE();
  await myTokenContract.write.grantRole([
    minterRole,
    tokenSaleContract.address,
  ]);

  const [deployer, acc1, acc2] = await viem.getWalletClients();

  return {
    publicClient,
    myTokenContract,
    myNftContract,
    tokenSaleContract,
    deployer,
    acc1,
    acc2,
  };
}

describe("NFT Shop", async () => {
  describe("When the Shop contract is deployed", async () => {
    it("defines the ratio as provided in parameters", async () => {
      
    });
    it("defines the price as provided in parameters", async () => {
      
    });
    it("uses a valid ERC20 as payment token", async () => {
      
     
    });
    it("uses a valid ERC721 as NFT collection", async () => {
      
    });
  });
  describe("When a user buys an ERC20 from the Token contract", async () => {
    it("charges the correct amount of ETH", async () => {
      
    });

    it("gives the correct amount of tokens", async () => {
   
      
    });
  });
  describe("When a user burns an ERC20 at the Shop contract", async () => {
    it("gives the correct amount of ETH", async () => {
     

    });
    it("burns the correct amount of tokens", async () => {
      
      

    });
  });
  describe("When a user buys an NFT from the Shop contract", async () => {
    it("charges the correct amount of ERC20 tokens", async () => {
     
    });
    it("gives the correct NFT", async () => {
     
    });
  });
  describe("When a user burns their NFT at the Shop contract", async () => {
    it("gives the correct amount of ERC20 tokens", async () => {
     
    });
  });
  describe("When the owner withdraws from the Shop contract", async () => {
    it("recovers the right amount of ERC20 tokens", async () => {
      
    });
    it("updates the owner pool account correctly", async () => {
      
    });
  });
});