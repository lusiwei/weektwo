const hre = require("hardhat");

const main = async () => {
    const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
    const buyMeACoffee = await BuyMeACoffee.deploy();
    await buyMeACoffee.deployed();
    console.log("buy me a coffee address", buyMeACoffee.address);
}

main().then(() => process.exit(0)).catch(e => {
    console.log(e);
    process.exit(1);
})