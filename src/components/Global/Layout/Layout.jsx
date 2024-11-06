import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as MainLayout } from './Flex';

import Header from '@components/global/Header/Header';
import TabBar from '@components/global/TabBar/TabBar';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';
import Modal from '@components/global/modal/Modal';
import { getCookie, removeCookie } from '@util/configCookie';

// API 불러오기
import { AuthAPI } from '@apis/authApi';

// 커스텀 훅 import
import useLogoutModal from '@hooks/modal/useLogoutModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '@recoil/atom/modalState';
import { activeTabState } from '@recoil/atom/tabState';

function Layout({ children }) {
  const [type, setType] = useState(1);
  const [title, setTitle] = useState('');
  const [noIcons, setNoIcons] = useState(false);

  const modalConfig = useRecoilValue(modalState);

  const { openLogoutModal } = useLogoutModal();

  const isActhenticated = useRecoilValue(isActhenticatedState);
  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

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

  // 페이지 리다이렉션 && Tab Bar
  useEffect(() => {
    const { pathname } = location;

    // 사용자가 로그인 한 경우 페이지 리다이렉션
    // if (isActhenticated && location.pathname === '/login') {
    //     navigate('/');
    //   } else {}
    // 사용자가 로그인을 하고 있지 않은 경우

    // Tab Bar 그 멀까요?
    switch (pathname) {
      case '/':
        setActiveTab('home');
        setType(1);
        break;
      case '/shop':
        setActiveTab('shop');
        setType(1);
        break;
      case '/search':
        setActiveTab('search');
        setType(0);
        break;
      case '/my':
        setActiveTab('my');
        setTitle('MY PAGE');
        setType(3);
        break;
      case '/my/edit/petinfo':
        setActiveTab('my');
        setTitle('우리아이 정보 수정');
        setType(4);
        setNoIcons(true);
        break;
      case '/my/edit/myinfo':
        setActiveTab('my');
        setTitle('내 정보 수정');
        setType(4);
        setNoIcons(true);
        break;
      case '/login':
        setType(2);
        break;
      case '/sign-up':
        setType(2);
        break;
      case '/signup/success':
        setType(1);
        break;
      case '/cart':
        setType(4);
        setTitle('장바구니');
        setNoIcons(true);
        break;
      case '/order':
        setType(1);
        break;
      case '/orderList':
        setType(4);
        break;
    }
  }, [location]);

  return (
    <>
      {type >= 1 && <Header type={type} title={title} noIcons={noIcons} />}

      <MainLayout
        direction="column"
        height="auto"
        justify="flex-start"
        align="center"
      >
        {children}
      </MainLayout>

      {/* {!['/login', '/sign-up', '/cart', '/order', '/product/detail'].includes(location.pathname) && (
        <TabBar activeTab={activeTab} />
      )} */}
      {activeTab !== '' && <TabBar activeTab={activeTab} />}

      {/* 모달 오픈 */}
      {modalConfig.isVisible && (
        <Modal
          title={modalConfig.title}
          description={modalConfig.description}
          actionsBtn={modalConfig.actions}
        />
      )}

      {/* 
      
        Feat: 사용자가 로그인을 하고 있을 있을 경우 활성화되는 로그아웃 버튼
        - 단, 해당 위치에서 테스트를 하기 위해 Layout.jsx에 위치해 있을 뿐 나중에 마이페이지로 옮길 예정
      
      */}
      {isActhenticated && <button onClick={openLogoutModal}>로그아웃</button>}
    </>
  );
}

export default Layout;
