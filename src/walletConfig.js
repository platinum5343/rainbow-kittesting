// walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// Configure chains
const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

// Get default wallets for RainbowKit
const defaultWallets = getDefaultWallets('My Wallet App', chains);

// Make sure connectors is iterable
const defaultConnectors = defaultWallets.connectors({ chains });

// Combine desktop + mobile
export const connectors = [
  ...defaultConnectors, // RainbowKit default wallets (desktop + mobile)
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true,
      mobileLinks: ['metamask', 'trust', 'rainbow'], // mobile deep-link
    },
  }),
  new InjectedConnector({ chains }), // fallback for desktop
];

// Create client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export { chains };
