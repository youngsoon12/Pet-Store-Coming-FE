/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { styles } from './PurchaseModal.style';
import Button from '../../global/button';

export default function PurchaseModal({ discountPrice, initialQuantity, closeModal }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const navigate = useNavigate(); 

  const totalPrice = discountPrice * quantity;
  
  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleAddToCart = () => {
    navigate('/cart'); 
    closeModal(); 
  };

  const handleBuyNow = () => {
    navigate('/order'); 
    closeModal(); 
  };

  return (
    <div css={styles.overlay} onClick={closeModal}>
      <div css={styles.controlsContainer} onClick={(e) => e.stopPropagation()}>
        <div css={styles.dragHandle}>
          <div css={styles.dragBar}></div>
        </div>
        <div css={styles.quantityControl}>
          <button onClick={() => handleQuantityChange(-1)} css={styles.quantityButton}>-</button>
          <span css={styles.quantityText}>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)} css={styles.quantityButton}>+</button>
        </div>
        <div css={styles.priceInfo}>
          <span>상품 가격</span>
          <span css={styles.price}>{discountPrice.toLocaleString()}원</span>
        </div>
        <div css={styles.divider}></div>
        <div css={styles.totalInfo}>
          <span>총 상품 금액</span>
          <span css={styles.totalPrice}>{totalPrice.toLocaleString()}원</span>
        </div>
        <div css={styles.buttonContainer}>
          <Button 
            text="장바구니 담기" 
            theme="reverse" 
            width={259} 
            height={52} 
            fontWeight={700}
            onClick={handleAddToCart} 
          />
          <Button 
            text="바로 구매하기" 
            theme="black" 
            width={259} 
            height={52} 
            fontWeight={700}
            onClick={handleBuyNow} 
          />
        </div>
      </div>
    </div>
  );
};
