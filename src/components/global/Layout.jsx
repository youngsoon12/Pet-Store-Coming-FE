import React from 'react';

import { Flex as Wrapper } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <Wrapper
        direction="column"
        margin="52px auto 0 auto"
        backgroundColor="gray"
      >
        {children}
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
