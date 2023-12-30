// async function main() {
//     [owner, signer2, signer3] = await ethers.getSigners();
  
//     RexCoin = await ethers.getContractFactory('RexCoin', owner);
//     rexCoin = await RexCoin.deploy();
  
//     Crowdsale = await ethers.getContractFactory('Crowdsale', owner);
//     crowdSale = await Crowdsale.deploy(2, owner.address, rexCoin.address);
  
//     await rexCoin.connect(owner).mint(
//       crowdSale.address,
//       ethers.utils.parseEther('10000')
//     )
  
//     console.log("Crowdsale:",      crowdSale.address);
//     console.log("RexCoin:",        rexCoin.address);
//     console.log("signer2:",        signer2.address);
//   }
  
//   // npx hardhat run --network localhost scripts/deploy.js
  
//   main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//       console.error(error);
//       process.exit(1);
//     });

//new code const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
  
    let RexCoin = await ethers.getContractFactory('RexCoin');
    let rexCoin = await RexCoin.deploy(owner.address);
  
    let Crowdsale = await ethers.getContractFactory('Crowdsale');
    let crowdSale = await Crowdsale.deploy(2, owner.address, rexCoin.address);
  
    await rexCoin.connect(owner).mint(
      crowdSale.address,
      ethers.utils.parseEther('10000')
    );
  
    console.log("Crowdsale:", crowdSale.address);
    console.log("RexCoin:", rexCoin.address);
    console.log("owner:", owner.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  