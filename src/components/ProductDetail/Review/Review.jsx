/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import starIcon from '@assets/images/ProductDetail/starIcon.svg';
import { styles } from './Review.style';



export default function Review () {

const reviews = [
  {
    user: 'JISU****',
    date: '2023.05.12',
    type: '개모차레인 커버(소/중형)',
    content: '배송이 빨라서 좋아요! 완전 만족하고 있어요 다음에 또 제품 이용하고 싶어요 너무너무 좋아요!',
  },
  {
    user: 'JISU****',
    date: '2023.05.12',
    type: '개모차레인 커버(소/중형)',
    content: '배송이 빨라서 좋아요! 완전 만족하고 있어요 다음에 또 제품 이용하고 싶어요 너무너무 좋아요! 정말 마음에 들어요',
  },
  {
    user: 'KKK****',
    date: '2023.05.12',
    type: '개모차레인 커버(소/중형)',
    content: '배송이 빨라서 좋아요! 완전 만족하고 있어요 다음에 또 제품 이용하고 싶어요 너무너무 좋아요!',
  },
  {
    user: 'JJI****',
    date: '2023.05.12',
    type: '개모차레인 커버(소/중형)',
    content: '배송이 빨라서 좋아요! 완전 만족하고 있어요 다음에 또 제품 이용하고 싶어요 너무너무 좋아요!',
  },
];
  const [showAllReviews, setShowAllReviews] = useState(false);
  const reviewSectionRef = useRef(null);
  const toggleReviews = () => {
    setShowAllReviews((prev) => !prev);
  };
  // const scrollToReviews = () => {
  //   reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  // };


  return (
    <div ref={reviewSectionRef} css={styles.reviewSection}>
      <div css={styles.reviewHeader}>
        <span css={styles.reviewCountText}>리뷰 ({reviews.length})</span>
        <div css={styles.reviewStars}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img key={index} src={starIcon} alt="star" css={styles.reviewStarIcon} />
          ))}
        </div>
      </div>
      <div css={styles.separatorLine} />

      <div css={styles.reviewList}>
        {(showAllReviews ? reviews : reviews.slice(0, 2)).map((review, index) => (
          <div key={index} css={styles.reviewForm}>
            <div css={styles.reviewHeaderDetails}>
              <div css={styles.reviewStars}>
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <img key={starIndex} src={starIcon} alt="star" css={styles.reviewStarIcon} />
                ))}
              </div>
              <span css={styles.reviewUser}>{review.user}</span>
              <span css={styles.reviewDate}>{review.date}</span>
            </div>
            <span css={styles.reviewType}>{`타입: ${review.type}`}</span>
            <p css={styles.reviewContent}>{review.content}</p>
            <div css={styles.separatorLine} />
          </div>
        ))}
      </div>

      <button onClick={toggleReviews} css={styles.toggleButton}>
        {showAllReviews ? '상품 리뷰 닫기' : '상품 리뷰 전체보기'}
        <svg width="13" height="13" viewBox="0 0 28 16">
          <path d="M28 1L13.97 15 0 1.058" stroke="#484848" strokeWidth="3" fill="none" />
        </svg>
      </button>
    </div>
  );
}; 