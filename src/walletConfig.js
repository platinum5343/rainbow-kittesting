// walletConfig.js
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

// 2️⃣ Connectors array
export const connectors = [
  new InjectedConnector({ chains }), // Desktop MetaMask
  new WalletConnectConnector({
    chains,
    options: {
      qrcode: true,
      // Mobile wallets deep linking
      mobileLinks: ['metamask', 'rainbow', 'trust'],
    },
  }),
];

// 3️⃣ Wagmi client
export const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

// 4️⃣ Export chains
export { chains };
