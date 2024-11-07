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
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../../recoil/atom/category';


import { getCookie } from '@util/configCookie';
import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilValue } from 'recoil';
import axios from 'axios';

export default function Mainpage() {

  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategoryData = useRecoilValue(isSubCategoryInfoState);

  const selectedCategory = '취향저격 간식 모음';

  const isActhenticated = useRecoilValue(isActhenticatedState);
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  const images = {
    '취향저격 간식 모음': [
      mainImage,
      subImage1,
      subImage2,
      subImage3,
      subImage4,
    ],
  };

  useEffect(() => {
    async function fetchRecommendedProdut() {
      console.log(isActhenticated);
      const token = getCookie('token');

      try {
        console.log(token);

        const resposne = await axios
          .get(`${import.meta.env.VITE_API_URL}/product/list/main`, {
            headers: {
              Authorization: token ? `Bearer ${token}` : '',
            },
          })
          .then((res) => res.data);

        setRecommendedProduct([...resposne.data]);
      } catch (error) {}
    }

    fetchRecommendedProdut();
  }, []);

  return (
    <>
      <div css={styles.mainContainer}>
        <Slider />

        {recommendedProduct && (
          <div css={styles.imageGrid}>
            <img
              src={recommendedProduct[0].productThumbnailImageUrl}
              alt="main"
              css={styles.mainImage}
            />
            <div css={styles.textContainer}>
              <h2 css={styles.title}>
                {isActhenticated ? '꼬미님 취향저격 상품' : '꼬밍 인기상품'}
              </h2>
              <p css={styles.subtitle}>
                {isActhenticated
                  ? '꼬미님의 취향을 저격할 맞춤 상품이에요. 꼭 필요한 상품들을 골라보세요.'
                  : '저희 꼬밍 사이트의 인기상품 제품들입니다.'}
              </p>
            </div>
            <div css={styles.subImagesContainer}>
              {recommendedProduct.slice(1).map((item) => {
                return (
                  <img
                    key={item.productId}
                    src={item.productThumbnailImageUrl}
                    alt={item.productName}
                    css={styles.subImage}
                  />
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
