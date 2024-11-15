import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Flex as MainLayout } from './Flex';

import Header from '@components/Global/Header/Header';
import TabBar from '@components/Global/TabBar/TabBar';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';

import Modal from '@components/Global/Modal/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';

import { getCookie, removeCookie, decodeToken } from '@util/configCookie';

// API 불러오기
import { AuthAPI } from '@apis/authApi';

// 커스텀 훅 import
import useLogoutModal from '@hooks/modal/useLogoutModal';

import { modalState } from '@recoil/atom/modalState';
import { activeTabState } from '@recoil/atom/tabState';

// 쿠키

function Layout({ children }) {
  const [type, setType] = useState(0);
  const [title, setTitle] = useState('');
  const [noIcons, setNoIcons] = useState(false);

  const modalConfig = useRecoilValue(modalState);

  const { openLogoutModal } = useLogoutModal();

  // const  = useRecoilValue(isActhenticatedState);
  const [isActhenticated, setIsActhenticated] =
    useRecoilState(isActhenticatedState);

  const [activeTab, setActiveTab] = useRecoilState(activeTabState);

  const apiClass = new AuthAPI();

  const location = useLocation(); // location 정보 가져오기
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie('token')) {
      setIsActhenticated(true);
    }
  }, [isActhenticated]);

  // // 로그인 이후 쿠키 만료 시간 계산
  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      const decodeInfo = decodeToken(token);

      if (decodeInfo) {
        const expirationTime = decodeInfo.exp * 1000;
        const currentTime = Date.now();
        if (currentTime > expirationTime) {
          // 토큰 만료됨
          removeCookie('token');
          removeCookie('refreshToken');
          setIsActhenticated(false);
          alert('세션이 만료되었습니다. 다시 로그인 해주세요.');
          navigate('/login');
        }
      }
    }
  }, [navigate]);

  // 페이지 리다이렉션 && Tab Bar
  useEffect(() => {
    const { pathname } = location;

    const notLoginUserAccess = [
      '/order',
      '/order/success',
      '/success',
      '/my',
      '/my/edit/petinfo',
      '/my/edit/myinfo',
      '/my/order-history',
      '/cart',
    ];

    const LoginUserAccess = [
      '/login',
      '/login/oauth/callback/kakao',
      '/sign-up',
      '/signup/success',
    ];

    // 사용자가 로그인하지 않고 인가되지 않은 페이지 접속 시
    if (!isActhenticated && notLoginUserAccess.includes(pathname)) {
      navigate('/login');
    }

    // 로그인한 사용자가 로그인하지 않은 페이지 접속 시
    if (isActhenticated && LoginUserAccess.includes(pathname)) {
      navigate('/');
    }

    // 사용자가 로그인 한 경우 페이지 리다이렉션
    // if (isActhenticated && location.pathname === '/login') {
    //     navigate('/');
    //   } else {}
    // 사용자가 로그인을 하고 있지 않은 경우

    // Tab Bar 그 멀까요?
    if (pathname.startsWith('/shop')) {
      setActiveTab('shop');
      setType(1);
      // '/shop/:category' 또는 '/shop/:category/:subcategory' 경로일 경우
      const pathParts = pathname.split('/');
      if (pathParts.length >= 3 && pathParts[1] === 'shop') {
        const category = pathParts[2]; // '/shop/:category' 또는 '/shop/:category/:subcategory'에서 :category 추출
        setType(4);
        setTitle(category.toUpperCase());
      }
    } else if (pathname.startsWith('/product')) {
      setActiveTab('');
      setType(5);
    } else {
      switch (pathname) {
        case '/':
          setActiveTab('home');
          setType(1);
          break;
        // case '/shop':
        //   setActiveTab('shop');
        //   setType(1);
        //   break;
        case '/search':
          setActiveTab('search');
          setType(0);
          break;
        case '/petprofile':
          setType(3);
          setTitle('우리아이 등록');
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
          setActiveTab('');
          break;
        case '/order':
          setType(1);
          break;
        case '/my/order-history':
          setType(4);
          setActiveTab('my');
          setTitle('주문 내역');
          break;
      }
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
      {/* {isActhenticated && <button onClick={openLogoutModal}>로그아웃</button>} */}
    </>
  );
}

export default Layout;
