# PlanqFi Periphery

[![Tests](https://github.com/planq-fi/periphery/workflows/Tests/badge.svg)](https://github.com/planq-fi/periphery/actions?query=workflow%3ATests)
[![Lint](https://github.com/planq-fi/periphery/workflows/Lint/badge.svg)](https://github.com/planq-fi/periphery/actions?query=workflow%3ALint)

This repository contains the periphery smart contracts for the PlanqFi Protocol.
For the lower level core contracts, see the [planq-fi-contracts](https://github.com/planq-fi/contracts)
repository.

## Bug bounty

This repository is subject to the PlanqFi bug bounty program,
per the terms defined [here](./bug-bounty.md).

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@planq-fi/periphery`
and import bytecode imported from artifacts located at
`@planq-fi/periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@planq-fi/periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all PlanqFi code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The PlanqFi periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@planq-fi/periphery`, e.g.:

```solidity
import '@planq-fi/periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```
