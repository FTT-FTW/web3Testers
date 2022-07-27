import { Button, Stack } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { connectors } from '../../../connector';
import { toHex, truncateAddress } from '../../../utils';

import { CardList } from './CardList';
import { Header } from './Header';
import { Link } from 'react-router-dom';
import { Walletconnect } from '../WalletConnect';

function Home() {
  const { library, chainId, account, activate, deactivate, active } =
    useWeb3React();

  useEffect(() => {
    const provider = window.localStorage.getItem('provider');
    console.log(provider);
    if (provider) activate(connectors[provider]);
  }, []);
  return (
    <Stack className="container">
      <Header />
      <div className="contentBody">
        <span className="bodyText">
          GET PAID TO TEST <br /> WEB3 PRODUCTS
        </span>
        <Link to="/waitlist">
          <Button
            variant="contained"
            sx={{
              marginTop: '16px',
              textTransform: 'unset',
              width: 150,
              backgroundColor: '#349FFF',
            }}
          >
            Join waitlist
          </Button>
        </Link>
        <Walletconnect />
      </div>
      <CardList />
    </Stack>
  );
}

export default Home;
