import React from 'react';

import styled from '@emotion/styled';
import { Flex as Wrapper } from './Flex';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center" margin="105px 0 0 0">
      {/* Header 컴포넌트 import */}
      {children}
      {/* Footer 컴포넌트 import */}
    </Wrapper>
  );
}

export default Layout;
