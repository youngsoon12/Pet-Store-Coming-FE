import React from 'react';

import { Flex as Wrapper } from './Flex';
import Header from '@components/global/Header';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center">
      <Header />

      {children}
      {/* Footer 컴포넌트 import */}
    </Wrapper>
  );
}

export default Layout;
