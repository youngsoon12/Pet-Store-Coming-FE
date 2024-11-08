/** @jsxImportSource @emotion/react */
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useSetRecoilState } from 'recoil';
import { activeTabState } from '@recoil/atom/tabState';
import { useParams } from 'react-router-dom';
import { styles } from './ProductDetail.style';
import starIcon from '@assets/images/ProductDetail/starIcon.svg';
// import Review from '../../components/ProductDetail/Review/Review';
import PurchaseModal from '../../components/ProductDetail/PurchaseModal/PurchaseModal';
import PurchaseButton from '../../components/ProductDetail/PurchaseButton/PurchaseButton';
import InfoSection from '../../components/ProductDetail/InfoSection/InfoSection';

export default function ProductDetailPage() {
  const { id } = useParams();
  // const userId = import.meta.env.VITE_USER_ID;
  const setActiveTabValues = useSetRecoilState(activeTabState);

  const reviewSectionRef = useRef(null);

  const [productDetail, setProductDetail] = useState(null);

  const [showAllDescriptions, setShowAllDescriptions] = useState(false);

  const [isModalOpen, setModalOpen] = useState(false);

  const scrollToReviews = () => {
    reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchaseButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  useEffect(() => {
    setActiveTabValues('');
  }, []);

  useEffect(() => {
    // 상품 상세 설명 정보 가져오기 함수
    async function fetchProductDetailInformation() {
      try {
        const res = await axios
          .get(`${import.meta.env.VITE_API_URL}/product/${id}/detail`)
          .then((res) => res.data);

        setProductDetail(res.data);
      } catch (error) {
        // 예외 처리 -> 서버에서 ErrorCode가 있거나 그냥 다른 에러가 날 경우 어떻게 처리할건가요?
        console.log(error);
      }
    }

    fetchProductDetailInformation();
  }, []);

  return (
    <>
      {productDetail && (
        <>
          <img
            src={productDetail.prodcutThumbnailImageUrl}
            alt={productDetail.prodcutThumbnailImageName}
            css={styles.productImage}
          />

          <div css={styles.productInfo}>
            {/* 상품 기본 정보 (스토어, 상품 이름, 가격) */}
            <div css={styles.productTitle}>
              <div css={styles.productInfo_left_panel}>
                <span>{productDetail.storeBrandName}</span>
                <span>{productDetail.productName}</span>

                <div css={styles.priceDetails}>
                  {productDetail.productDiscountRate > 0 && (
                    <span css={styles.discount}>
                      {productDetail.productDiscountRate}%
                    </span>
                  )}

                  <span css={styles.price}>
                    {productDetail.productDiscountPrice.toLocaleString()}원
                  </span>
                </div>
                {productDetail.productDiscountRate > 0 && (
                  <div css={styles.originalPrice}>
                    {productDetail.productPrice.toLocaleString()}원
                  </div>
                )}
              </div>

              {/* 나 리뷰 */}
              <div css={styles.starsWrapper}>
                <div>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src={starIcon}
                      alt="star"
                      css={styles.starIcon}
                    />
                  ))}
                </div>

                <p css={styles.reviewCount} onClick={scrollToReviews}>
                  33개 리뷰보기
                </p>
              </div>
            </div>

            <div css={styles.separatorLine} />

            {/* 상품 설명 */}
            <div css={styles.descriptionImages}>
              {productDetail.productDescription}
            </div>

            {/* {descriptionImages.slice(0, showAllDescriptions ? descriptionImages.length : 2).map((image, index) => (
                <img key={index} src={image} alt={`Product Detail ${index + 1}`} css={styles.descriptionImage} />
              ))} */}

            <button
              onClick={() => setShowAllDescriptions((prev) => !prev)}
              css={styles.toggleButton}
            >
              {showAllDescriptions ? '상품 설명 닫기' : '상품 설명 더보기'}

              {!showAllDescriptions ? (
                <svg width="13" height="13" viewBox="0 0 28 16">
                  <path
                    d="M28 1L13.97 15 0 1.058"
                    stroke="#000"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              ) : null}
            </button>

            {/* 나 아직 안됨 */}
            {/* Work List -> Review API 설계 완료 시 데이터 가져온 후 처리 */}
            {/* <Review /> */}

            <div css={styles.separatorLine} />

            <InfoSection />
          </div>

          <PurchaseButton onClick={handlePurchaseButtonClick} />

          {isModalOpen && (
            <PurchaseModal
              options={productDetail.productOptions}
              discountPrice={productDetail.productDiscountPrice}
              productId={id}
              productDetail={productDetail}
              closeModal={closeModal}
            />
          )}
        </>
      )}
    </>
  );
}
