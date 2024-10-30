import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

// Global Component Import
import { globalStyle } from '@styles/global';
import Layout from '../layout';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import LoginPage from '@pages/LoginPage';
import KakaoRedirect from '@pages/LoginPage/Redirect/KakaoRedirect';
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
