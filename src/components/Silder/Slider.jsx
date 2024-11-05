/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { styles } from './Slider.style';
import { isMainCategoryInfoState } from '../../recoil/atom/category'; 

export default function Slider() {
  const navigate = useNavigate();
  const mainCategories = useRecoilValue(isMainCategoryInfoState); // Recoil에서 데이터 가져오기
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = mainCategories.map((category, index) => ({
    image: category.thumbnailUrl, 
    subjet: 'MD’s pick', 
    title: index === 0 ? 'Mw6 강아지 유모차' : index === 1 ? 'LONTANO BACKPACK' : 'Born to Basic', 
    description: index === 0
      ? '캠핑/피크닉 시즌 활용도 만점!'
      : index === 1
      ? '초경량 무게 한정 수량 입고!!'
      : '데일리 산책 무드 3팩 구성', 
    category: category.slug, 
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides]);

  const handleClickCategory = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div css={styles.sliderContainer}>
      {slides.map((slide, index) => (
        <div
          key={index}
          css={[
            styles.slide,
            index === currentIndex ? styles.activeSlide : styles.inactiveSlide,
          ]}
          style={{ backgroundImage: `url(${slide.image})` }} // API에서 가져온 이미지 사용
        >
          <div css={styles.textContainer}>
            <h2>{slide.subjet}</h2> 
            <h3>{slide.title}</h3> 
            <p css={styles.productDescription}>{slide.description}</p> {/* 수동으로 추가한 설명 */}
            <button
              css={styles.categoryButton}
              onClick={() => handleClickCategory(slide.category)} // API에서 가져온 슬러그로 카테고리 이동
            >
              {slide.category} &gt;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
