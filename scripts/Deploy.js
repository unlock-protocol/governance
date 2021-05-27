const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {

    // Compile our Contracts, just in case
    await hre.run('compile');

    // Get a signer from the HardHard environment
    // Learn about signers here: https://docs.ethers.io/v4/api-wallet.html
    const [tokenRecipient] = await ethers.getSigners();

    // This gets the contract from 
    const Token = await hre.ethers.getContractFactory("Comp");
    const token = await Token.deploy(tokenRecipient.address);

    await token.deployed();
    console.log(`Token deployed to: ${token.address}`);


    const initialBalance = await token.balanceOf(tokenRecipient.address);
    console.log(`${initialBalance / 1e18} tokens transfered to ${tokenRecipient.address}`);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });