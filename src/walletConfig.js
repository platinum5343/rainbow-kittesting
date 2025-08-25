

// walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { mainnet, goerli } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

// Configure supported chains
const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

// Wallet connectors (handles MetaMask, WalletConnect, Coinbase, Rainbow, etc.)
const { connectors } = getDefaultWallets({
  appName: 'My Wallet App',
  projectId: '957441542f6f32d1b3244dc8f1f88292', // from https://cloud.walletconnect.com
  chains,
});

// Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };