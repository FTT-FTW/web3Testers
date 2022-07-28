import { Button, Stack } from '@mui/material';
import React from 'react';

import { CardList } from './CardList';
import { Header } from './Header';
import { Link } from 'react-router-dom';

function Home() {
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
      </div>
      <CardList />
    </Stack>
  );
}

export default Home;
