import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as Wrapper } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilValue } from 'recoil';

function Layout({ children }) {
  const location = useLocation(); // location 정보 가져오기
  const navigate = useNavigate();
  const isActhenticated = useRecoilValue(isActhenticatedState);

  useEffect(() => {
    // 사용자가 로그인을 하고 있을 경우
    if (isActhenticated && location.pathname === '/login') {
      navigate('/');
    }

    // 사용자가 로그인을 하고 있지 않은 경우
  }, [location]);

  return (
    <>
      <Header />
      <Wrapper
        direction="column"
        width="100vw"
        height="auto"
        padding="0 8vw 232px 8vw"
        margin="105px auto 0 auto"
        align="center"
      >
        {children}
      </Wrapper>
      <Footer />
    </>
  );
}

export default Layout;
