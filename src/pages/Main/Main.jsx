/** @jsxImportSource @emotion/react */
//import { useState } from 'react';
import Slider from '../../components/Silder/Slider';
import { styles } from './Main.style';
import Header from "@components/global/header";
import TabBar from "@components/global/TabBar/TabBar";
import mainImage from '../../assets/images/mainpage/main.jpg';
import subImage1 from '../../assets/images/mainpage/sub1.jpg';
import subImage2 from '../../assets/images/mainpage/sub2.jpg';
import subImage3 from '../../assets/images/mainpage/sub3.jpg';
import subImage4 from '../../assets/images/mainpage/sub4.jpg';
import Footer from '../../components/global/footer';

export default function Mainpage() {
  const selectedCategory = '취향저격 간식 모음';

  const images = {
    '취향저격 간식 모음': [mainImage, subImage1, subImage2, subImage3, subImage4],
  };

  return (
    <>
    <Header type={1}/>
    <div css={styles.mainContainer}>
      <Slider />
      <div css={styles.imageGrid}>
        <img src={images[selectedCategory][0]} alt="main" css={styles.mainImage} />
        <div css={styles.textContainer}>
          <h2 css={styles.title}>꼬미님 취향저격 상품</h2>
          <p css={styles.subtitle}>
            꼬미님의 취향을 저격할 맞춤 상품이에요. 꼭 필요한 상품들을 골라보세요.
          </p>
        </div>
        <div css={styles.subImagesContainer}>
          {images[selectedCategory].slice(1).map((img, idx) => (
            <img key={idx} src={img} alt={`sub-${idx}`} css={styles.subImage} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    <TabBar/>
    </>
  );
}

