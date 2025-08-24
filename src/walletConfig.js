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

// Default wallets (v1)
const defaultWallets = getDefaultWallets('My Wallet App', chains);

// Get connectors array correctly by calling the function
const defaultConnectors = defaultWallets.connectors({ chains });

// Combine with manual connectors
export const connectors = [
  new InjectedConnector({ chains }), // Desktop MetaMask
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true,
      mobileLinks: ['metamask', 'rainbow', 'trust'],
    },
  }),
  ...defaultConnectors, // now it works
];

// Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// Export chains
export { chains };
