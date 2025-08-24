// src/App.js
import React from 'react';
import { WagmiConfig } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { wagmiClient, chains } from './walletConfig';

function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
          <ConnectButton />
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
