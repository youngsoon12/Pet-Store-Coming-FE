import React from 'react';

import { Flex as Wrapper } from './Flex';

function Layout({ children }) {
  return (
    <Wrapper direction="column" align="center">
      {/* Header 컴포넌트 import */}
      {children}
      {/* Footer 컴포넌트 import */}
    </Wrapper>
  );
}

export default Layout;
