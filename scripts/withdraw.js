const { ethers, getNamedAccounts } = require("hardhat");

async function main() {
  const { deployer } = await getNamedAccounts();
  const fundMe = await ethers.getContract("FundMe", deployer);
  console.log(`Got contract FundMe at ${await fundMe.getAddress()}`);
  console.log("Withdrawing from contract...");
  const transactionResponse = await fundMe.cheaperWithdraw();
  await transactionResponse.wait();
  console.log("Got it back!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
