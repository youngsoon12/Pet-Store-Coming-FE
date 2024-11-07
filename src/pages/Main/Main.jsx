/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import Slider from '../../components/Silder/Slider';
import { styles } from './Main.style';
import subImage1 from '../../assets/images/Mainpage/sub1.jpg';
import mainImage from '../../assets/images/Mainpage/main.jpg';
import subImage2 from '../../assets/images/Mainpage/sub2.jpg';
import subImage3 from '../../assets/images/Mainpage/sub3.jpg';
import subImage4 from '../../assets/images/Mainpage/sub4.jpg';
import Footer from '../../components/Global/Footer/Footer';
import { useRecoilValue } from 'recoil';

import {
  isMainCategoryInfoState,
  isSubCategoryInfoState,
} from '../../recoil/atom/category';

import { getCookie } from '@util/configCookie';
import { isActhenticatedState } from '@recoil/atom/authState';
//import { useRecoilValue } from 'recoil';
import axios from 'axios';

export default function Mainpage() {
  const mainCategory = useRecoilValue(isMainCategoryInfoState);
  const subCategoryData = useRecoilValue(isSubCategoryInfoState);

  const selectedCategory = '취향저격 간식 모음';

  const isActhenticated = useRecoilValue(isActhenticatedState);
  const [recommendedProduct, setRecommendedProduct] = useState(null);

  useEffect(() => {
    async function fetchRecommendedProdut() {
      const token = getCookie('token');

      try {
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
              loading="lazy"
            />
            <div css={styles.textContainer}>
              <h2 css={styles.title}>
                {isActhenticated ? '꼬미님 취향저격 상품' : '꼬밍 인기상품'}
              </h2>
              <p css={styles.subtitle}>
                {isActhenticated
                  ? '꼬미님의 취향을 저격할 맞춤 상품이에요. 꼭 필요한 상품들을 골라보세요.'
                  : '지금 꼬밍에서 제일 인기있는 상품들입니다. 반려견 정보를 등록하고 맞춤상품을 추천받아보세요! '}
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
                    loading="lazy"
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
