import * as nearAPI from 'near-api-js'

const near = new nearAPI.Near({
  headers: {},
  networkId: 'testnet',
  keyStore: new nearAPI.keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: 'https://rpc.testnet.near.org',
  walletUrl: 'https://wallet.testnet.near.org'
} as nearAPI.ConnectConfig)

export const wallet = new nearAPI.WalletConnection(near, 'nice-prefix')

export const connectWallet = async (): Promise<void> => {
  return await wallet.requestSignIn()
}

export const getWalletBalance = async (): Promise<string> => {
  const balance = (await wallet.account().state()).amount
  return nearAPI.utils.format.formatNearAmount(balance)
}

export const formatBalanceToHuman = (balance: string): string => {
  return Number(balance).toFixed(3)
}

export const logout = () => {
  wallet.signOut()
  location.reload()
}
