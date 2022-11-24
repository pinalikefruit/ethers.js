const { ethers } = require('ethers')
require('dotenv').config()

const ETHEREUM_PROVIDER = process.env.ETHEREUM_PROVIDER
const provider = new ethers.providers.JsonRpcProvider(ETHEREUM_PROVIDER)

const address_DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F'
const ABI_DAI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
]

const contract_DAI = new ethers.Contract(address_DAI, ABI_DAI, provider)

const main = async() => {
    const name = await contract_DAI.name()
    const symbol = await contract_DAI.symbol()
    const totalSupply = await contract_DAI.totalSupply()
    const balanceOfDAIContract = await contract_DAI.balanceOf(address_DAI)

    console.log(`The token name is : ${name} \n`)
    console.log(`The symbol name is : ${symbol} \n`)
    console.log(`The Total supply is : ${totalSupply} \n`)
    console.log(`The balance of DAI contract is : ${ethers.utils.formatEther(balanceOfDAIContract)} ETH \n`)
}

main()