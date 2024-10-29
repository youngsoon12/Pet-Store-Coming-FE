import React from 'react';

import { Flex as Wrapper } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

function Layout({ children }) {
  return (
    <>
      <Header />
      <Wrapper
        direction="column"
        width="100vw"
        height="auto"
        padding="0 8vw 232px 8vw"
        margin="105px auto 0 auto"
      >
        {children}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Layout;
