import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { globalStyle } from '@styles/global';

// Global Component Import
import Layout from '../components/global/Layout';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import LoginPage from '../pages/LoginPage/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Global styles={globalStyle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
