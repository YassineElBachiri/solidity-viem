import { expect } from "chai";
import { viem } from "hardhat";

describe("Basic tests for understanding ERC20", async () => {
    it("triggers the Transfer event with the address of the sender when sending transactions", async () => {
        const tokenContract = await viem.deployContract("MyToken");
        const publicClient = await viem.getPublicClient();
        const [deployer, account1] = await viem.getWalletClients();

        // Allocate tokens to the deployer account
        await tokenContract.write.mint([
            deployer.account.address,
            10000n, // Mint 10,000 tokens to the deployer
        ]);

        // // Ensure there's enough balance in the deployer account for the transfer
        // const deployerBalanceBeforeTransfer = await tokenContract.read.balanceOf([
        //     deployer.account.address,
        // ]);
        // expect(deployerBalanceBeforeTransfer).to.be.above(0);

        const hash = await tokenContract.write.transfer([
            account1.account.address,
            1n,
        ]);

        await publicClient.waitForTransactionReceipt({ hash });
        const withdrawalEvents = await tokenContract.getEvents.Transfer();

        expect(withdrawalEvents).to.have.lengthOf(1);
        expect(withdrawalEvents[0].args.from?.toLowerCase()).to.equal(
            deployer.account.address
        );
        expect(withdrawalEvents[0].args.to?.toLowerCase()).to.equal(
            account1.account.address
        );
        expect(withdrawalEvents[0].args.value).to.equal(1n);
    });
});