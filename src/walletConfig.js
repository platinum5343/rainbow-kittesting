// src/walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Configure chains
const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

// Default wallets (desktop + mobile handled automatically)
const { connectors } = getDefaultWallets({
  appName: 'My Wallet App',
  chains,
});

// Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };
