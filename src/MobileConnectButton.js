// src/MobileConnectButton.js
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { isMobile } from './utils/isMobile';

export default function MobileConnectButton() {
  const handleClick = () => {
    if (isMobile()) {
      // Force WalletConnect modal on mobile
      const connectButton = document.querySelector('[data-rk-connect-button]');
      if (connectButton) connectButton.click();
    }
  };

  return (
    <div onClick={handleClick}>
      <ConnectButton label="Connect Wallet" />
    </div>
  );
}
