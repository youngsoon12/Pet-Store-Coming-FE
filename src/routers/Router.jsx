import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global } from '@emotion/react';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import { globalStyle } from '@styles/global';
import Layout from '../components/global/Layout';
import ShopPage from '../pages/Shop/Shop';
import PetProfilePage from '../pages/PetProfile/PetProfile';
import Mainpage from '../pages/Main/Main';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/main" element={<Mainpage />}></Route>
         <Route path="/petprofile" element={<PetProfilePage />}></Route> 
         <Route path="/shop" element={<ShopPage />}></Route> 
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
