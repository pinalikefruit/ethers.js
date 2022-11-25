const { ethers } = require('ethers')
require('dotenv').config()

const ETHEREUM_PROVIDER = process.env.ETHEREUM_PROVIDER

const provider = new ethers.providers.JsonRpcProvider(ETHEREUM_PROVIDER)

const main = async () => {
    
    const block = await provider.getBlockNumber()
    console.log(`Block number : ${block}`)

    const blockInfo = await provider.getBlock(block)
    console.log(blockInfo)

    const { transactions } = await provider.getBlockWithTransactions(block)

    console.log(`\nLogging first transaction in block:\n`)
    console.log(transactions[0])
}

main()