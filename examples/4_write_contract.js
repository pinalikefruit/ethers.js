const { ethers } = require('ethers')
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL

const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
const wallet = new ethers.Wallet(PRIVATE_KEY,provider)

const ABI_ERC20 = [
    "function balanceOf(address) view returns (uint)",
    "function transfer(address to, uint amount) returns (bool)",
]

const addressContract = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'

const contractLink = new ethers.Contract(addressContract, ABI_ERC20, provider)

const main = async() => {
    
    let balanceLink = await contractLink.balanceOf(wallet.address)
    console.log(`The address ${wallet.address} have a balance ${ethers.utils.formatEther(balanceLink)} LINK`)
    console.log('-------------------------')
    console.log('The transaction is beggin....')
    console.log('-------------------------')

    const contractWithWallet = contractLink.connect(wallet)

    const tx = await contractWithWallet.transfer(wallet.address, ethers.utils.parseEther('10'))
    await tx.wait()
    console.log('-------------------------')
    balanceLink = await contractLink.balanceOf(wallet.address)
    console.log(`The address ${wallet.address} have a NEW balance ${ethers.utils.formatEther(balanceLink)} LINK`)

}

main()

