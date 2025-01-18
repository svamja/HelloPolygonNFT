require("dotenv").config();
const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    const nftContractAddress = process.env.CONTRACT_ADDRESS;

    const TreeNFT = await ethers.getContractFactory("TreeNFT");
    const nft = TreeNFT.attach(nftContractAddress);

    const recipient = process.env.RECIPIENT_ADDRESS;
    const metadataURI = "https://gist.githubusercontent.com/Kalyse/7945272/raw/b0dd218579e864ba0a07a4bddbc4a8a281124790/sample.json";

    try {
        // Calling the mintNFT method
        // let txn = await nft.mint(recipient, metadataURI, { gasLimit: 500000 });
        let txn = await nft.mintNFT(recipient, metadataURI);
        console.log("Minting transaction hash:", txn.hash);

        // Wait for the transaction to be mined
        const receipt = await txn.wait();
        console.log(`NFT Minted to ${recipient} in block ${receipt.blockNumber}`);
    } catch (error) {
        console.error("Minting failed:", error);
        process.exit(1);
    }
}

main();
