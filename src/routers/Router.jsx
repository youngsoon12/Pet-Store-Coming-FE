import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { globalStyle } from '@styles/global';

// Global Component Import
import Layout from '@components/global/Layout';
import GlobalTitle from '@components/global/globaltitle';

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
          <Route path="global" element={<GlobalTitle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
