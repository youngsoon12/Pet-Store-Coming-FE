/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import Slider from '../../components/Silder/Slider';
import { styles } from './Main.style';
import mainImage from '../../assets/images/mainpage/main.jpg';
import subImage1 from '../../assets/images/mainpage/sub1.jpg';
import subImage2 from '../../assets/images/mainpage/sub2.jpg';
import subImage3 from '../../assets/images/mainpage/sub3.jpg';
import subImage4 from '../../assets/images/mainpage/sub4.jpg';
import Footer from '../../components/Global/Footer/Footer';
import { useRecoilValue } from 'recoil';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../../recoil/atom/category';

import { decodeToken, getCookie } from '@util/configCookie';
import { isActhenticatedState } from '@recoil/atom/authState';
//import { useRecoilValue } from 'recoil';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Mainpage() {
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategoryData = useRecoilValue(isSubCategoryInfoState);

  const selectedCategory = '취향저격 간식 모음';

  const isActhenticated = useRecoilValue(isActhenticatedState);
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  const [name, setName] = useState('');

  useEffect(() => {
    async function fetchRecommendedProdut() {
      console.log(isActhenticated);
      const token = getCookie('token');
      if (isActhenticated) {
        const userInfo = decodeToken(token);
        setName(userInfo?.name);
      }
      try {
        console.log(token);

        console.log('Fuck You');

        const resposne = await axios
          .get(`${import.meta.env.VITE_API_URL}/product/list/main`, {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            },
          })
          .then((res) => res.data);

        setRecommendedProduct([...resposne.data]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchRecommendedProdut();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <div css={styles.mainContainer}>
        <Slider />

        {recommendedProduct && (
          <div css={styles.imageGrid}>
            <img
              src={recommendedProduct[0]?.productThumbnailImageUrl}
              alt="main"
              css={styles.mainImage}
              // loading="lazy"
              onClick={() =>
                navigate(`/product/${recommendedProduct[0]?.productId}`)
              }
            />
            <div css={styles.textContainer}>
              <h2 css={styles.title}>
                {isActhenticated ? (
                  <>
                    <span>{name}</span>님 취향저격 상품
                  </>
                ) : (
                  '꼬밍 인기상품'
                )}
              </h2>
              <p css={styles.subtitle}>
                {isActhenticated
                  ? `${name}님의 취향을 저격할 맞춤 상품이에요. 꼭 필요한 상품들을 골라보세요.`
                  : '지금 꼬밍에서 가장 인기있는 상품들입니다. 반려견 정보를 등록하고 맞춤상품을 추천받아보세요! '}
              </p>
            </div>
            <div css={styles.subImagesContainer}>
              {recommendedProduct.slice(1).map((item) => {
                return (
                  <div css={styles.subImageWrapper}>
                    <img
                      key={item.productId}
                      src={item.productThumbnailImageUrl}
                      alt={item.productName}
                      css={styles.subImage}
                      // loading="lazy"
                      onClick={() => navigate(`/product/${item.productId}`)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 인기 상품 추천 */}

        <Footer />
      </div>
    </>
  );
}
