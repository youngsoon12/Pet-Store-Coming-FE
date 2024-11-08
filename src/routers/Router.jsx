import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Global } from '@emotion/react';
import axios from 'axios';
import { useEffect } from 'react';

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
import StoreCreate from '../pages/Store/Create/StoreCreate';

import CategoryPage from '../pages/Category/Category';

// 사용자 활성화 여부 상태 가져오기
import { isActhenticatedState } from '@recoil/atom/authState';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../recoil/atom/category';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const Router = () => {
  const setMainCategory = useSetRecoilState(isMainCategoryInfoState); // 메인 카테고리 정보를 담는 전역 상태 변환 함수 return
  const setSubCategory = useSetRecoilState(isSubCategoryInfoState); // 서브 카테고리 정보를 담는 전역 상태 변환 함수 return
  const isLogin = useRecoilValue(isActhenticatedState);

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
          <Route path="/search" element={<Search />} />

          {/* 상품 조회 페이지 */}
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/:category" element={<CategoryPage />} />
          <Route
            path="/shop/:category/:subcategory"
            element={<CategoryPage />}
          />

          {/* 상품 상세 페이지 */}
          <Route path="/product/:id" element={<ProductDetailPage />} />

          {/* 입력 초기 반려견 등록 페이지 */}
          <Route path="/petprofile" element={<PetProfilePage />} />

          {!isLogin ? (
            <>
              {/* - 로그인 이후 들어갈 수 없는 곳 */}
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/login/oauth/callback/kakao"
                element={<KakaoRedirect />}
              />

              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/signup/success" element={<SignupSuccess />} />
            </>
          ) : (
            <>
              {/* - 로그인 사용자만 들어갈 수 있는 곳 */}

              {/* #1. 주문 내역 */}
              <Route path="/order" element={<PaymentPage />} />

              {/* #2. 결제하기 리다이렉션 페이지 */}
              <Route path="/order/success" element={<OrderSuccess />} />

              {/* #3. 결제 완료 펭지 */}
              <Route path="/success" element={<PaymentSuccess />} />

              {/* 내 정보 페이지 관련 */}
              <Route path="/my" element={<MyPage />} />
              <Route path="/my/edit/petinfo" element={<EditPetInfo />} />
              <Route path="/my/edit/myinfo" element={<EditMyInfo />} />
              <Route path="/my/order-history" element={<OrderList />} />

              <Route path="/cart" element={<Cart />} />
            </>
          )}

          {/* 보류 */}
          <Route path="/store/create" element={<StoreCreate />} />
          {/* <Route path="*" element={} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
