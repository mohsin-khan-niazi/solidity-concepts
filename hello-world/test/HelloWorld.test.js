import { expect } from "chai";
import hardhat from 'hardhat'
const { ethers } = hardhat;


let helloWorldInstance = null;

describe("HelloWorld",  () => {
  it('should deployed a hello world contract and set it to the global variables', async () => {
    const HelloWorldContract = await ethers.getContractFactory("HelloWorld");
    helloWorldInstance = await HelloWorldContract.deploy();
    expect(helloWorldInstance).to.not.be.an("undefined");
  })

  it('should check the values set in hello world contract', async () => {
    const greetings = await helloWorldInstance.greetings();
    expect(greetings).to.be.equal("Hello World!");
  })

});
