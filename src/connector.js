import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1],
});

//https://mainnet.infura.io/v3/35510359f7784e289951df662325c6ac

const walletconnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  qrcodeModalOptions: {
    mobileLinks: [
      'rainbow',
      'metamask',
      'argent',
      'trust',
      'imtoken',
      'pillar',
    ],
  },
});

const walletlink = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
  appName: 'Web3 Testers',
});

export const connectors = {
  injected: injected,
  walletConnect: walletconnect,
  coinbaseWallet: walletlink,
};
