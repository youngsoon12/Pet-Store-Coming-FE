/** @jsxImportSource @emotion/react */
import { useState, useRef } from 'react';
import { styles } from './ProductDetail.style';
import starIcon from '@assets/images/ProductDetail/starIcon.svg';
import Wagon from '@assets/images/ProductDetail/Wagon.jpg';
import Img1 from '@assets/images/ProductDetail/Img1.jpg';
import Img2 from '@assets/images/ProductDetail/Img2.jpg';
import Img3 from '@assets/images/ProductDetail/Img3.gif';
import Img4 from '@assets/images/ProductDetail/Img4.jpg';
import Review from '../../components/ProductDetail/Review/Review';
import PurchaseModal from '../../components/ProductDetail/PurchaseModal/PurchaseModal';
import PurchaseButton from '../../components/ProductDetail/PurchaseButton/PurchaseButton';
import InfoSection from '../../components/ProductDetail/InfoSection/InfoSection';

export default function ProductDetailPage() {
  const products = [
    {
      id: 1,
      sub_category_id: 1,
      store_id: 1,
      store_brand: "꼬밍",
      name: "강아지 유모차",
      price: 36900,
      discount_rate: 5,
      discount_price: 29900,
      thumbnail_url: Wagon,
      created_at: "2023-01-01",
      updated_at: "2023-01-01",
      options: [
        { id: 100, productId: 1, description: "사료 100kg(+8000원)", addPrice: 8000 },
        { id: 200, productId: 1, description: "사료 1000kg(+80000원)", addPrice: 80000 },
        { id: 500, productId: 1, description: "사료 10000kg(+800000원)", addPrice: 800000 },
       
      ],
    },
    {
      id: 2,
      sub_category_id: 2,
      store_id: 1,
      store_brand: "꼬밍",
      name: "고양이 유모차",
      price: 39900,
      discount_rate: 10,
      discount_price: 35910,
      thumbnail_url: Wagon,
      created_at: "2023-01-01",
      updated_at: "2023-01-01",
      options: [
        { id: 101, productId: 2, description: "고양이 사료 500g", addPrice: 5000 },
        { id: 102, productId: 2, description: "고양이 사료 1kg", addPrice: 9000 },
      ],
    },
  ];

  const descriptionImages = [Img1, Img2, Img3, Img4];
  const reviewSectionRef = useRef(null);
  const [showAllDescriptions, setShowAllDescriptions] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);

  const product = products[currentProductIndex];

  const toggleDescription = () => {
    setShowAllDescriptions((prev) => !prev);
  };

  const scrollToReviews = () => {
    reviewSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePurchaseButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <img src={product.thumbnail_url} alt={product.thumbnail_alt} css={styles.productImage} />

      <div css={styles.productInfo}>
        <div css={styles.productTitle}>
          <span>{product.store_brand}</span>
          <span>{product.name}</span>
          <div css={styles.starsWrapper}>
            {Array.from({ length: 5 }).map((_, index) => (
              <img key={index} src={starIcon} alt="star" css={styles.starIcon} />
            ))}
          </div>
        </div>
        <p css={styles.reviewCount} onClick={scrollToReviews}>33개 리뷰보기</p>
        <div css={styles.priceDetails}>
          <span css={styles.discount}>{product.discount_rate}%</span>
          <span css={styles.price}>{product.discount_price.toLocaleString()}원</span>
        </div>
        <div css={styles.originalPrice}>{product.price.toLocaleString()}원</div>
        <div css={styles.separatorLine} />

        <div css={styles.descriptionImages}>
          {descriptionImages.slice(0, showAllDescriptions ? descriptionImages.length : 2).map((image, index) => (
            <img key={index} src={image} alt={`Product Detail ${index + 1}`} css={styles.descriptionImage} />
          ))}
        </div>

        <button onClick={toggleDescription} css={styles.toggleButton}>
          {showAllDescriptions ? '상품 설명 닫기' : '상품 설명 더보기'}
          <svg width="13" height="13" viewBox="0 0 28 16">
            <path d="M28 1L13.97 15 0 1.058" stroke="#000" strokeWidth="3" fill="none" />
          </svg>
        </button>
        <Review />

        <div css={styles.separatorLine} />
        <InfoSection />
      </div>
      <PurchaseButton onClick={handlePurchaseButtonClick} />

      {isModalOpen && (
        <PurchaseModal
          options={product.options} 
          discountPrice={product.discount_price}
          initialQuantity={quantity}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
