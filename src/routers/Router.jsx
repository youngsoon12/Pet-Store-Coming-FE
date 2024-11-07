import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import axios from 'axios';
import { useEffect } from 'react';

// Global Component Import
import { globalStyle } from '@styles/global';
import Layout from '@components/global/Layout/Layout';

import axios from 'axios';

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
import CategoryPage from '../pages/Category/Category';
import { useEffect } from 'react';

import { isMainCategoryInfoState, isSubCategoryInfoState } from '../recoil/atom/category';
import { useSetRecoilState } from 'recoil';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../recoil/atom/category';
import { useSetRecoilState } from 'recoil';

const Router = () => {
  const setMainCategory = useSetRecoilState(isMainCategoryInfoState); // 메인 카테고리 정보를 담는 전역 상태 변환 함수 return
  const setSubCategory = useSetRecoilState(isSubCategoryInfoState); // 서브 카테고리 정보를 담는 전역 상태 변환 함수 return

  // useEffect()를 통해서 페이지 생성 Mount 시 카테고리 정보 response(응답)
  useEffect(() => {

    async function getCategoryInfo() {
      // GET /category/main-category/list Request
      // GET /category/sub-category/list Request
      const baseUrl = import.meta.env.VITE_API_URL;
      const mainCategoryResponse = await axios
        .get(`${baseUrl}/category/main-category/list`)
        .then((res) => res.data)
        .catch((err) => console.log(err));

      const subCategoryResponse = await axios
        .get(`${baseUrl}/category/sub-category/list`)
        .then((res) => res.data)
        .catch((err) => console.log(err));


      mainCategoryResponse && setMainCategory([...mainCategoryResponse.data]);
      subCategoryResponse && setSubCategory([...subCategoryResponse.data]);

      // 전역 상태 데이터 변환
      // setMainCategory([...mainCategoryResponse.data]);
      // setSubCategory([...subCategoryResponse.data]);
    }

    getCategoryInfo();

  }, []);

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
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/petprofile" element={<PetProfilePage />} />
          <Route path="/shop" element={<ShopPage />} />

          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route path="/shop/:category/:subcategory" element={<CategoryPage />} />
          {/* <Route path="/shop/:category/:subCategory" element={<CategoryPage />} /> */}

          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
