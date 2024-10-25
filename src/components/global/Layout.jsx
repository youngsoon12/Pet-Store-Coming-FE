import React from 'react';

import styled from '@emotion/styled';
import { Flex as Wrapper } from './Flex';
import Header from '@components/global/Header';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center" margin="105px 0 0 0">
      <Header />

      {children}
      {/* Footer 컴포넌트 import */}
    </Wrapper>
  );
}

export default Layout;
