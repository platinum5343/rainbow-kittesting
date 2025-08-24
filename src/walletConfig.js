// src/walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli } from 'wagmi/chains';

const { chains, provider } = configureChains([mainnet, goerli], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: 'My Wallet App',
  chains,
});

export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };
