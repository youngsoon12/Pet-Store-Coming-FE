import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';
import Layout from '../components/global/Layout';
import PaymentPage from '../pages/payments';
import PaymentSuccess from '../pages/payments_success';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<PaymentPage />} />
          <Route path="/success" element={<PaymentSuccess />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
