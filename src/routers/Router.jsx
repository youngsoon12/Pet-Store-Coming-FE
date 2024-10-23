import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
