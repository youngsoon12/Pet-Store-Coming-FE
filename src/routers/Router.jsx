import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

// Global Component Import
import { globalStyle } from '@styles/global';
import Layout from '@components/global/Layout/Layout';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import LoginPage from '@pages/LoginPage';
import KakaoRedirect from '@pages/LoginPage/Redirect/KakaoRedirect';
import ShopPage from '../pages/Shop/Shop';
//import PetProfilePage from '../pages/PetProfile/PetProfile';
//import Mainpage from '../pages/Main/Main';
import SignUp from '@pages/SignUpPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<KakaoRedirect />}
          />
/        <Route path="/shop" element={<ShopPage />}></Route> 
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;