// walletConfig.js
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { mainnet, goerli } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

// 1️⃣ Configure chains
const { chains, provider } = configureChains(
  [mainnet, goerli],
  [publicProvider()]
);

// 2️⃣ Default wallets for RainbowKit (desktop only)
const { connectors: defaultConnectors } = getDefaultWallets({
  appName: 'My Wallet App',
  chains,
});

// 3️⃣ Add connectors
export const connectors = [
  // Desktop MetaMask
  new InjectedConnector({ chains }),
  
  // Mobile wallets via WalletConnect
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true, // Shows QR code on desktop if needed
      mobileLinks: ['metamask', 'rainbow', 'trust'], // deep links for mobile apps
    },
  }),
  
  // Keep RainbowKit default connectors for desktop
  ...defaultConnectors,
];

// 4️⃣ Create Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// 5️⃣ Export chains for RainbowKit Provider
export { chains };
