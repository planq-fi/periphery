import { abi as POOL_ABI } from '@planq-fi/contracts/artifacts/contracts/PlanqFiPool.sol/PlanqFiPool.json'
import { Contract, Wallet } from 'ethers'
import { IPlanqFiPool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IPlanqFiPool {
  return new Contract(address, POOL_ABI, wallet) as IPlanqFiPool
}
