require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

task("deploy", "Deploys a COMPound style governance system")
  .addParam("token", "The address to receive the initial supply")
  .addParam("timelock", "The timelock administrator")
  .addParam("guardian", "The governor guardian")
  .setAction(async taskArgs => {

    const { deploy } = require("./scripts/deploy");

    await deploy({
      tokenRecipient: taskArgs.token,
      timeLockAdmin: taskArgs.timelock,
      guardian: taskArgs.guardian
    });

  })

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // networks: {
  //   rinkeby: {
  //     url: "https://rinkeby.infura.io/v3/<<Your infura Key>>",
  //     accounts: ["PrivateKey1", "PrivateKey2", "PrivateKey3"]
  //   }
  // },
  solidity: "0.5.16",
};

