import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';
import Layout from '../components/global/Layout';
import GlobalTitle from '../components/global/globaltitle/GlobalTitle';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Global styles={globalStyle} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="global" element={<GlobalTitle />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
