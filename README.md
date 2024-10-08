# TigerVault: A Web3 Wallet with React Native and WalletConnect

## Recent Progress

We've made significant strides in developing TigerVault:

1. **Wallet Functionality**: Implemented basic wallet operations including balance checking and sending transactions.
2. **UI Enhancements**: Created a comprehensive wallet screen with connection status, balance display, and transaction input fields.
3. **Mock Wallet Integration**: Developed a mock wallet for testing purposes, integrated with WalletConnect.
4. **Real/Mock Wallet Toggle**: Added ability to switch between real and mock wallet functionality.
5. **Transaction History**: Implemented a basic transaction history display.
6. **Configuration Centralization**: Refactored to centralize configuration and reduce redundancy.

## Current Features

- Connect/Disconnect wallet functionality for both real and mock wallets
- Display wallet address and balance
- Send transaction interface (working for both real and mock wallets)
- Transaction history view
- Tab-based navigation (TigerVault, Wallet, Explore)
- WalletConnect integration for connecting to external wallets
- Toggle between real and mock wallet functionality

## Next Steps

1. Implement testnet integration for real Ethereum network testing
2. Enhance transaction history with pagination and more details
3. Implement network switching functionality
4. Add support for token transfers
5. Implement additional security features
6. Optimize performance and reduce bundle size

## Testnet Testing Guide

To proceed with testnet testing, follow these steps:

1. Install MetaMask or another Ethereum wallet that supports testnets.
2. Switch to a testnet like Goerli or Sepolia in your wallet.
3. Get some testnet ETH from a faucet (search for "Goerli faucet" or "Sepolia faucet").
4. Update the app to connect to the testnet instead of mainnet.
5. Use this wallet to interact with the app, allowing you to test real (but testnet) Ethereum transactions.

This approach will provide a more comprehensive testing environment, allowing you to verify both the UI/UX and actual blockchain interactions.

## Running the Project

1. Clone the repository
2. Run `yarn install` to install dependencies
3. Use `npx expo start` to run the development server
4. Open the app in an Expo Go client or run on an emulator/simulator

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.
