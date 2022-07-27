import { Button } from '@mui/material';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../connector';

export const Walletconnect = () => {
  const { activate } = useWeb3React();

  const setProvider = (type) => {
    window.localStorage.setItem('provider', type);
  };

  const connect = async (injector) => {
    console.log('connecting....');
    try {
      console.log(injector);
      await activate(injector, undefined, true);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <Button
      variant="contained"
      sx={{
        marginTop: '16px',
        textTransform: 'unset',
        width: 150,
        backgroundColor: '#349FFF',
      }}
      onClick={() => {
        connect(connectors.walletConnect);
        setProvider('walletConnect');
      }}
    >
      WalletConnect
    </Button>
  );
};
