/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styles } from './Slider.style';
import { isMainCategoryInfoState } from '../../recoil/atom/category'; 

const subjet = ["MW6 강아지 유모차", 'LONTANO BACKPACK', 'Born to Basic'];
const description = ['캠핑/피크닉 시즌 활용도 만점!', '초경량 무게 한정 수량 입고!!', '데일리 산책 무드 3팩 구성',];

export default function Slider() {
  const navigate = useNavigate();
  const mainCategories = useRecoilValue(isMainCategoryInfoState);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [slides, setSlides] = useState(null);

  useEffect(() => {
    setSlides({
      index: currentIndex,
      image: mainCategories[currentIndex].thumbnailUrl,
      name: mainCategories[currentIndex].name,
      subjet: subjet[currentIndex],
      description: description[currentIndex]
    })

  }, [mainCategories, currentIndex]);

  
  // const slides = (mainCategories || []).map((category, index) => {
  //   console.log('Category data:', category); 
  //   return {
  //     image: category.thumbnailUrl,
  //     name: category.name, 
  //     subjet: 'MD’s pick',
  
  //     description: index === 0
  //       ? 
  //       : index === 1
  //       ? 
  //       : 
  //     category: category.slug,  // category slug는 현재 경로에서 사용되지 않음
  //   };
  // });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mainCategories.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides]);

  // category.name을 사용하여 경로를 설정
  const handleClickCategory = (category) => {
    console.log("category")
    console.log(category)
    navigate(`/shop/${category.slug}`, { state: category.id });
  };

  return (
    <div css={styles.sliderContainer}>
      { slides && (
        <div
          css={[
            styles.slide,
            slides.index === currentIndex ? styles.activeSlide : styles.inactiveSlide,
          ]}
          style={{ backgroundImage: `url(${slides.image})` }}
        >
          <div css={styles.textContainer}>
            <h2>{slides.subjet}</h2>
            <h3>{slides.title}</h3>
            <p css={styles.productDescription}>{slides.description}</p>
            <button
              css={styles.categoryButton}
              onClick={() => handleClickCategory(mainCategories[currentIndex])}  
            >
              {slides.name} &gt;
            </button>
          </div>
        </div>
      ) }

       {/* <div 
        css={[
          styles.slide,
          slides.index === currentIndex ? styles.activeSlide : styles.inactiveSlide,
        ]}
      >

      </div> */}
      
      
       {/* {slides.length > 0 ? (
          slides.map((slide, index) => (
          <div
            key={index}
            css={[
              styles.slide,
              index === currentIndex ? styles.activeSlide : styles.inactiveSlide,
            ]}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div css={styles.textContainer}>
              <h2>{slide.subjet}</h2>
              <h3>{slide.title}</h3>
              <p css={styles.productDescription}>{slide.description}</p>
              <button
                css={styles.categoryButton}
                onClick={() => handleClickCategory(slide)}  
              >
                {slide.name} &gt;
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>슬라이드를 불러오는 중입니다...</p>
      )} */}
    </div>
  );
}
