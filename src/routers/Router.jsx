import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import { globalStyle } from '@styles/global';

// Global Component Import
import Layout from '../components/global/Layout';
import GlobalTitle from '@components/global/globaltitle';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import LoginPage from '../pages/LoginPage/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="global" element={<GlobalTitle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
