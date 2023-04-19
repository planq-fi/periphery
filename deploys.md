# Deployment addresses

The latest version of `@planq-fi/contracts`, `@planq-fi/periphery`, `@uniswap/swap-router-contracts`, and `@uniswap/v3-staker` are deployed at the addresses listed below. Integrators should **no longer assume that they are deployed to the same addresses across chains** and be extremely careful to confirm mappings below.

| Contract                                                                                                                                                     | Mainnet | 2nd Address |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------| ------------------------------------------------------ |-------------|
| [PlanqFiFactory](@planq-fi/contracts/contracts/PlanqFiFactory.sol)                                                                                           | `0x43D238E8FEA3671b8468De6b11B6c1fA0ea4Be1c`           | ``          |
| [Multicall2](https://evm.planq.network/address/0x902A459aFD1742530b2c7edAEb275523d633E918)                                                                   | `0x902A459aFD1742530b2c7edAEb275523d633E918`           | ``          |
| [ProxyAdmin](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/ProxyAdmin.sol)                                   | `0x8a0F961528dc7A3C44d25033e9De861b494685D9`           | ``          |
| [TickLens](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/lens/TickLens.sol)                                                                    | `0xc752f9f89C1E3e735B96d5d1D85e320FcB3f8729`           | ``          |
| [Quoter](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/lens/Quoter.sol)                                                                        | `0xF2cF00D0d9c0BAbA77C5662379923bA466C8ec0E`           | ``          |
| [SwapRouter](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/SwapRouter.sol)                                                                     | `0x51d68997C7358294d5F33E10d933099f11Bb3b6c`           | ``          |
| [NFTDescriptor](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol)                                                     | `0x4672B8Bc077BC23cF2c7A4ad30a365846B5C8791`           | ``          |
| [NonfungibleTokenPositionDescriptor](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/NonfungibleTokenPositionDescriptor.sol)                     | `0x1CB18F8d7A739D232658c2e946Fe045e33AFADD3`           | ``          |
| [TransparentUpgradeableProxy](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.1-solc-0.7-2/contracts/proxy/TransparentUpgradeableProxy.sol) | `0xa2a0995a048cdd123F0AD4BE605eb75afa10dD4A`           | ``          |
| [NonfungiblePositionManager](https://github.com/planq-fi/periphery/blob/v1.0.0/contracts/NonfungiblePositionManager.sol)                                     | `0xeC264bbFBdf4FF27A2685e8996444fD9d430C7A7`           | ``          |

These addresses are final and were deployed from these npm package versions:

- `@planq-fi/contracts`: [`1.0.0`](https://github.com/planq-fi/contracts/tree/v1.0.0)
- `@planq-fi/periphery`: [`1.0.0`](https://github.com/planq-fi/periphery/tree/v1.0.0)

The source code is verified with Etherscan on all networks, for all contracts except `PlanqFiPool`.
We are working on getting the `PlanqFiPool` contract verified with Etherscan.
