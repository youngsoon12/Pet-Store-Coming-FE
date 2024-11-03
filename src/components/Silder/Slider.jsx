/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './Slider.style';
import wagonImage from '../../assets/images/mainpage/wagon.jpg';
import shopImage from '../../assets/images/mainpage/shop.jpg';
import clothesImage from '../../assets/images/mainpage/clothes.jpg';

export default function Slider() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: wagonImage,
      subjet: "MD’s pick",
      title: "Mw6 강아지 유모차",
      description: "캠핑/피크닉 시즌 활용도 만점!",
      category: "wagon >",
    },
    {
      image: shopImage,
      subjet: "10차 리오더 완판",
      title: "LONTANO BACKPACK",
      description: "초경량 무게 한정 수량 입고!!",
      category: "shop >",
    },
    {
      image: clothesImage,
      subjet: "3pack T-shirts",
      title: "Born to Basic",
      description: "데일리 산책 무드 3팩 구성",
      category: "clothes >",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [slides.length]);

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
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div css={styles.textContainer}>
            <h2>{slide.subjet}</h2>
            <h3>{slide.title}</h3>
            <p css={styles.productDescription}>{slide.description}</p>
            <button
              css={styles.categoryButton}
              onClick={() => handleClickCategory(slide.category)}
            >
              {slide.category}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
