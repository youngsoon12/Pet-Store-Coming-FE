import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';
import Layout from '../layout';
import SignupSuccess from '../pages/SignupSuccess/SignupSuccess';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup/success" element={<SignupSuccess />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
