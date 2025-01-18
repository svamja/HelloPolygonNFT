async function main() {
    const [deployer] = await ethers.getSigners();
    const nftContractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

    const TreeNFT = await ethers.getContractFactory("TreeNFT");
    const nft = TreeNFT.attach(nftContractAddress);

    const recipient = "RECIPIENT_WALLET_ADDRESS";
    const metadataURI = "https://your-json-api.com/tree-metadata.json";

    let txn = await nft.mintNFT(recipient, metadataURI);
    await txn.wait();

    console.log(`NFT Minted to ${recipient}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
