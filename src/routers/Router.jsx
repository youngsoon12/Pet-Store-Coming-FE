import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

// Global Component Import
import { globalStyle } from '@styles/global';
import Layout from '@components/global/Layout/Layout';

// 페이지 컴포넌트 import
import Home from '@pages/Home';
import PaymentPage from '../pages/Payments/Payments';
import PaymentSuccess from '../pages/PaymentsSuccess/PaymentSuccess';
import LoginPage from '@pages/LoginPage';
import KakaoRedirect from '@pages/LoginPage/Redirect/KakaoRedirect';
import ShopPage from '../pages/Shop/Shop';
import SignUp from '@pages/SignUpPage';
import MyPage from '../pages/MyPage/MyPage';
import ProductDetailPage from '../pages/ProductDetail/ProductDetail';
import PetProfilePage from '../pages/PetProfile/PetProfile';
import Mainpage from '../pages/Main/Main';
import Cart from '@pages/Cart/Cart';
import OrderSuccess from '../pages/OrderSuccess/OrderSuccess';
import Search from '../pages/Search/Search';
import OrderList from '../pages/OrderList/OrderList';
import EditPetInfo from '../pages/EditPetInfo/EditPetInfo';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<PaymentPage />} />
          <Route path="/success" element={<PaymentSuccess />} />
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<KakaoRedirect />}
          />
          <Route path="/my" element={<MyPage />} />
          <Route path="/my/edit/petinfo" element={<EditPetInfo />} />
          <Route path="/search" element={<Search />} />
          <Route path="/orderList" element={<OrderList />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<KakaoRedirect />}
          />
          <Route path="/product/detail" element={<ProductDetailPage />} />
          <Route path="/petprofile" element={<PetProfilePage />} />
          <Route path="/main" element={<Mainpage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
