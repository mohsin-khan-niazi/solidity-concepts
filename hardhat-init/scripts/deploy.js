import hardhat from 'hardhat'
const { ethers } = hardhat;

const helloWorld = await ethers.deployContract("HelloWorld");

await helloWorld.waitForDeployment();

console.log(`Hello World Contract deployed to ${helloWorld.target}`);

// Hello World Contract deployed to 0x5FbDB2315678afecb367f032d93F642f64180aa3
