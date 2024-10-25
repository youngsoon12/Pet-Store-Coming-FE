import React from 'react';

import { Flex as Wrapper } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center" margin="105px 0 0 0">
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

export default Layout;
