/**
 * Constant for chain ids
 */
export const NETWORK = Object.freeze({
  'mainnet': 1,
  'homestead': 1,
  'ropsten': 3,
  'rinkeby': 4,
  'goerli': 5,
  'kovan': 42,
  'bsc': 56,
  'poa-sokol': 77,
  'bsc-testnet': 97,
  'poa': 99,
  'xdai': 100,
  'polygon': 137,
  'matic': 137,
  'optimism': 420,
  'avalanche': 43114,
  'fuji': 43113,
  'celo': 42220,
  'celo-testnet': 44787,
  'mumbai': 80001,
  'harmony': 1666600000,
  'harmony-testnet': 1666700000,
  'harmony-devnet': 1666900000,
})

/**
 * Ethereum networks
 */
export const ETHEREUM_NETWORKS = Object.freeze([
  NETWORK.mainnet,
  NETWORK.ropsten,
  NETWORK.rinkeby,
  NETWORK.goerli,
  NETWORK.kovan
])
export const POLYGON_NETWORKS = Object.freeze([NETWORK.polygon, NETWORK.mumbai])
export const AVALANCHE_NETWORKS = Object.freeze([NETWORK.avalanche, NETWORK.fuji])
export const CELO_NETWORKS = Object.freeze([NETWORK.celo, NETWORK['celo-testnet']])
export const HARMONY_NETWORKS = Object.freeze([NETWORK.harmony, NETWORK['harmony-testnet'], NETWORK['harmony-devnet']])
