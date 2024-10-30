import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as MainLayout } from './Flex';

import Header from '@components/global/header';
import Footer from '@components/global/footer';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilState } from 'recoil';
import Modal from './modal/Modal';
import { getCookie, removeCookie } from '@util/configCookie';

// API 불러오기
import { AuthAPI } from '@apis/authApi';

function Layout({ children }) {
  const [showModal, setShowModal] = useState(false); // 쿠키 만료 시간 경고 모달창
  const [showLogoutModal, setShowLogoutModal] = useState(true); // 로그아웃 알림 모달창

  const apiClass = new AuthAPI();

  const location = useLocation(); // location 정보 가져오기
  const navigate = useNavigate();

  // 전역 상태 값 가져오기
  const [isActhenticated, setIsActhenticated] =
    useRecoilState(isActhenticatedState);

  // 로그아웃 핸들러
  const handleLogout = async () => {
    try {
      if (await apiClass.logout()) {
      }

      // const expirationTime = getCookie('tokenExpirationTime');

      // setIsActhenticated(false);
      // setShowModal(false);

      // // 로그인 한 디바이스 아이디 제거
      // localStorage.removeItem('deviceId', expirationTime);

      // // Cookie에 저장된 로그인과 관련된 정보 모두 삭제
      // removeCookie('token', {
      //   path: '/',
      //   sameSite: 'Lax',
      //   // secure: true, 배포 시 무조건 주석 풀기
      //   maxAge: Math.floor(expirationTime / 1000), // 토큰 만료 시간 설정
      // });

      // removeCookie('refreshToken', {
      //   path: '/',
      //   sameSite: 'Lax',
      //   // secure: true, 배포 시 무조건 주석 풀기
      //   maxAge: 7 * 24 * 60 * 60, // (초 단위) 7일 만료 시간
      // });

      // removeCookie('tokenExpirationTime', {
      //   path: '/',
      //   sameSite: 'Lax',
      //   // secure: true, 배포 시 무조건 주석 풀기
      //   maxAge: Math.floor(expirationTime / 1000), // 토큰 만료 시간 설정
      // });
    } catch (error) {}
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
      {/* <Header /> */}
      {isActhenticated && <button onClick={handleLogout}>로그아웃</button>}
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

      {showModal && <Modal />}
      {showLogoutModal && (
        <Modal
          title="로그아웃 안내"
          description="정말 로그아웃 하시겠습니까? 로그아웃 후에는 다시 로그인하셔야 합니다."
        />
      )}
      <Footer />
    </>
  );
}

export default Layout;
