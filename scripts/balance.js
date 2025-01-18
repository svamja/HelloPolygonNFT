async function main() {
    const [deployer] = await ethers.getSigners();  // Get the first signer from ethers
    const balance = await deployer.getBalance();   // Get the balance of the signer
    console.log("Wallet balance:", ethers.utils.formatEther(balance));  // Convert to ETH and print
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
