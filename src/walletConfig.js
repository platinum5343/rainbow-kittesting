// walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli } from 'wagmi/chains';

// Configure chains
const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

// Default wallets (desktop + mobile)
const { connectors } = getDefaultWallets({
  appName: 'My Wallet App',
  chains,
});

// Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors, // must be defaultConnectors for MetaMask mobile to work
  provider,
});

export { chains };
