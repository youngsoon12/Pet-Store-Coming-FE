import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as MainLayout } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';
import Modal from './modal/Modal';
import { getCookie, removeCookie } from '@util/configCookie';

// API 불러오기
import { AuthAPI } from '@apis/authApi';

// 커스텀 훅 import
import useLogoutModal from '@hooks/modal/useLogoutModal';
import { useRecoilValue } from 'recoil';
import { modalState } from '@recoil/atom/modalState';

function Layout({ children }) {
  const modalConfig = useRecoilValue(modalState);

  const { openLogoutModal } = useLogoutModal();
  const isActhenticated = useRecoilValue(isActhenticatedState);

  const apiClass = new AuthAPI();

  const location = useLocation(); // location 정보 가져오기
  const navigate = useNavigate();

  // // 로그인 이후 쿠키 만료 시간 계산
  // useEffect(() => {
  //   if (isActhenticated) {
  //     const token = getCookie('token');
  //     const expirationTime = getCookie('tokenExpirationTime');

  //     if (token && expirationTime) {
  //       const timeUntilExpiration = expirationTime - Date.now();

  //       // 현재 남은 쿠키 만료 시간이 5분 이하인 경우 바로 모달창 오픈
  //       if (timeUntilExpiration <= 5 * 60 * 1000) {
  //         setShowModal(true);
  //       } else {
  //         // setTimeout() 비동기 이벤트를 통해 남은 시간이 5분 이하로 남을 경우 모달창 오픈
  //         const waringTimeoutId = setTimeout(
  //           () => setShowModal(true),
  //           timeUntilExpiration - 5 * 60 * 1000
  //         );

  //         // 로그인 이후 토큰 만료 시간이 다 된 경우 -> 강제 로그아웃
  //         const logoutTimeoutId = setTimeout(
  //           () => handleLogout(),
  //           timeUntilExpiration
  //         );

  //         return () => {
  //           clearTimeout(waringTimeoutId);
  //           clearTimeout(logoutTimeoutId);
  //         };
  //       }
  //     }
  //   }
  // }, [isActhenticated]);

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
      {/* 모달 오픈 */}
      {modalConfig.isVisible && (
        <Modal
          title={modalConfig.title}
          description={modalConfig.description}
          actionsBtn={modalConfig.actions}
        />
      )}

      {/* <Header /> */}
      {isActhenticated && <button onClick={openLogoutModal}>로그아웃</button>}
      <button onClick={openLogoutModal}>로그아웃</button>
      <MainLayout
        direction="column"
        width="100vw"
        height="auto"
        padding="0 8vw 232px 8vw"
        margin="105px auto 0 auto"
        align="center"
      >
        {children}
      </MainLayout>

      <Footer />
    </>
  );
}

export default Layout;
