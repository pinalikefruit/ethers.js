const { ethers } = require('ethers')
require('dotenv').config()

const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const provider = new ethers.providers.JsonRpcProvider(GOERLI_RPC_URL)
const wallet = new ethers.Wallet(PRIVATE_KEY, provider)


const addressReceive = '0x55BD7E92250903186CEb3938c70F103654a38De1'


const main = async() => {

    let senderBalance = await provider.getBalance(wallet.address)
    let receiveBalance = await provider.getBalance(addressReceive)

    console.log(`The balance of sender before transaction is: ${ethers.utils.formatEther(senderBalance)}`)
    console.log(`The balance of receive before transaction is: ${ethers.utils.formatEther(receiveBalance)}`)
    console.log('........................')
    console.log('The transaction is starting ... .')
    const tx = await wallet.sendTransaction({
        to: addressReceive,
        value: ethers.utils.parseEther("2.5")
    })

    await tx.wait()
    console.log('........................')
    console.log('Transaction is completed.')


    senderBalance = await provider.getBalance(wallet.address)
    receiveBalance = await provider.getBalance(addressReceive)

    console.log(`The balance of sender after transaction is: ${ethers.utils.formatEther(senderBalance)}`)
    console.log(`The balance of receive after transaction is: ${ethers.utils.formatEther(receiveBalance)}`)
}

main()