import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as Wrapper } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilState } from 'recoil';
import Modal from './modal/Modal';
import { getCookie, removeCookie, cookiesOptions } from '@util/configCookie';

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false); // 모달창 상태 변수

  const location = useLocation(); // location 정보 가져오기
  const navigate = useNavigate();

  // 전역 상태 값 가져오기
  const [isActhenticated, setIsActhenticated] =
    useRecoilState(isActhenticatedState);

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsActhenticated(false);
    setShowModal(false);

    // 로그인 한 디바이스 아이디 제거
    localStorage.removeItem('deviceId');

    // Cookie에 저장된 로그인과 관련된 정보 모두 삭제
    removeCookie('token', ...cookiesOptions('token'));
    removeCookie('refreshToken', ...cookiesOptions('refreshToken'));
    removeCookie(
      'tokenExpirationTime',
      ...cookiesOptions('tokenExpirationTime')
    );
  };

  // 로그인 이후 쿠키 만료 시간 계산
  useEffect(() => {
    if (isActhenticated) {
      const token = getCookie('token');
      const expirationTime = getCookie('tokenExpirationTime');

      if (token && expirationTime) {
        const timeUntilExpiration = expirationTime - Date.now();

        // 현재 남은 쿠키 만료 시간이 5분 이하인 경우 바로 모달창 오픈
        if (timeUntilExpiration <= 5 * 60 * 1000) {
          setShowModal(true);
        } else {
          // setTimeout() 비동기 이벤트를 통해 남은 시간이 5분 이하로 남을 경우 모달창 오픈
          const waringTimeoutId = setTimeout(
            () => setShowModal(true),
            timeUntilExpiration - 5 * 60 * 1000
          );

          // 로그인 이후 토큰 만료 시간이 다 된 경우 -> 강제 로그아웃
          const logoutTimeoutId = setTimeout(
            () => handleLogout(),
            timeUntilExpiration
          );

          return () => {
            clearTimeout(waringTimeoutId);
            clearTimeout(logoutTimeoutId);
          };
        }
      }
    }
  }, [isActhenticated]);

  // 페이지 리다이렉션 useEffect()
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
      {showModal && <Modal />}
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
