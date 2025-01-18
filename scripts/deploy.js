async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contract with address:", deployer.address);

    // Get the contract factory
    const TreeNFT = await ethers.getContractFactory("TreeNFT");

    // Deploy the contract
    const nft = await TreeNFT.deploy(deployer.address);  // Pass deployer address as owner
    console.log("Deploying contract...");

    // Wait for the contract to be mined
    await nft.deployed();

    // Log the deployed contract's address
    console.log("NFT Contract deployed at:", nft.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
