const { ethers } = require('ethers')
require('dotenv').config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)

const address = '0x4317c44fD3143D8AC5723865CF046238A2cd8FD3'

const main = async () => {
    let balance = await provider.getBalance(address)
    balance = ethers.utils.formatEther(balance)
    console.log(`ETH Balance of ${address} = ${balance} ETH`)
}

main()
