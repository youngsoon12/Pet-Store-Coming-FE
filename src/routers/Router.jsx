import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';

// Global Component Import
import { globalStyle } from '@styles/global';
import Layout from '@components/global/Layout/Layout';

// 페이지 컴포넌트 import
// import Home from '@pages/Home';
import SignupSuccess from '../pages/SignupSuccess/SignupSuccess';
import PaymentPage from '../pages/Payments/Payments';
import PaymentSuccess from '../pages/PaymentsSuccess/PaymentSuccess';
import LoginPage from '@pages/Login/Login';
import KakaoRedirect from '@pages/Login/Redirect/KakaoRedirect';
import ShopPage from '../pages/Shop/Shop';
import SignUp from '@pages/SignUp/SignUp';
import MyPage from '../pages/MyPage/MyPage';
import ProductDetailPage from '../pages/ProductDetail/ProductDetail';
import PetProfilePage from '../pages/PetProfile/PetProfile';
import Mainpage from '../pages/Main/Main';
import Cart from '@pages/Cart/Cart';
import OrderSuccess from '../pages/OrderSuccess/OrderSuccess';
import Search from '../pages/Search/Search';
import OrderList from '../pages/OrderList/OrderList';
import EditPetInfo from '../pages/EditPetInfo/EditPetInfo';
import EditMyInfo from '../pages/EditMyInfo/EditMyInfo';

const Router = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyle} />
      <Layout>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/signup/success" element={<SignupSuccess />} />
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
          <Route path="/my/edit/myinfo" element={<EditMyInfo />} />
          <Route path="/search" element={<Search />} />
          <Route path="/orderList" element={<OrderList />} />
          <Route
            path="/login/oauth/callback/kakao"
            element={<KakaoRedirect />}
          />
          <Route path="/product/detail" element={<ProductDetailPage />} />
          <Route path="/petprofile" element={<PetProfilePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
