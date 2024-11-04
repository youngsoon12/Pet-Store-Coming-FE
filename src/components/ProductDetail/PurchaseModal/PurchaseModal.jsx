/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './PurchaseModal.style';
import Button from '../../global/button';

export default function PurchaseModal({ discountPrice, initialQuantity, options, closeModal }) {
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // 선택된 옵션의 addPrice를 합산한 총 가격
  const totalPrice = (discountPrice + (selectedOption?.addPrice || 0)) * quantity;

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };

  const handleOptionChange = (e) => {
    const selectedOptionId = e.target.value;
    const selected = options.find((option) => option.id === parseInt(selectedOptionId, 10));
    setSelectedOption(selected);
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

        <div css={styles.optionSelect}>
          <select id="options" onChange={handleOptionChange} css={styles.selectBox}>
            <option value="">옵션을 선택해주세요</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.description}
              </option>
            ))}
          </select>
        </div>

        <div css={styles.quantityControl}>
          <button onClick={() => handleQuantityChange(-1)} css={styles.quantityButton}>-</button>
          <span css={styles.quantityText}>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)} css={styles.quantityButton}>+</button>
        </div>

        <div css={styles.priceInfo}>
          <span>상품가격</span>
          <span css={styles.price}>{discountPrice.toLocaleString()}원</span>
        </div>

        <div css={styles.divider}></div>

        {/* 총 가격 정보 */}
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
}
