/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from './PurchaseModal.style';
import Button from '@components/Global/Button/Button';

import axios from 'axios';
import { decodeToken, getCookie } from '../../../util/configCookie';

export default function PurchaseModal({
  discountPrice,
  options,
  closeModal,
  productDetail,
  productId,
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();
  //const userId = import.meta.env.VITE_USER_ID;
  const totalPrice =
    (discountPrice + (selectedOption?.addPrice || 0)) * quantity;

  const handleQuantityChange = (change) => {
    setQuantity((prev) => Math.max(1, prev + change));
  };
  const token = getCookie('token');
  const userInfo = decodeToken(token);

  const handleOptionChange = (e) => {
    const selectedOptionId = e.target.value;
    const selected = options.find(
      (option) => option.id === parseInt(selectedOptionId, 10)
    );
    setSelectedOption(selected);
  };

  const handleBuyNow = () => {
    const selectedItems = [
      {
        ...productDetail,
        productImageUrl: productDetail.prodcutThumbnailImageUrl,
        productQuantity: quantity,
      },
    ];
    navigate('/order', { state: { selectedItems } });
    closeModal();
  };

  const handleAddToCart = async () => {
    try {
      const userId = userInfo.userId;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/cart/append`,
        {
          userId,
          productId,
          quantity,
        }
      );

      if (response.status === 200) {
        alert('장바구니에 상품이 추가되었습니다.');
        navigate('/cart');
        closeModal();
      }
    } catch (error) {
      console.error('Error during request:', error);

      if (error.response) {
        if (error.response.status === 409) {
          alert('이 상품은 이미 장바구니에 있습니다.');
        } else if (error.response.status === 400) {
          alert('잘못된 요청입니다. 다시 시도해 주세요.');
        } else if (error.response.status === 500) {
          alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } else {
          alert('예기치 않은 오류가 발생했습니다.');
        }
      } else if (error.request) {
        alert('서버에 연결할 수 없습니다. 인터넷 연결을 확인하세요.');
      } else {
        alert('요청 처리 중 오류가 발생했습니다.');
      }
    }
  };
  return (
    <div css={styles.overlay} onClick={closeModal}>
      <div css={styles.controlsContainer} onClick={(e) => e.stopPropagation()}>
        <div css={styles.dragHandle}>
          <div css={styles.dragBar}></div>
        </div>

        {options.length > 0 && (
          <div css={styles.optionSelect}>
            <select
              id="options"
              onChange={handleOptionChange}
              css={styles.selectBox}
            >
              <option value="">옵션을 선택해주세요</option>

              {options.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.description}
                  {option.addPrice !== 0
                    ? option.addPrice
                    : ' | 가격 변동 없음'}
                </option>
              ))}
            </select>
          </div>
        )}

        <div css={styles.optionSelect}>
          <select
            id="options"
            onChange={handleOptionChange}
            css={styles.selectBox}
          >
            <option value="">옵션을 선택해주세요</option>

            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.description}
                {option.addPrice !== 0 ? option.addPrice : ' | 변동 없음'}
              </option>
            ))}
          </select>
        </div>
 

        <div css={styles.quantityControl}>
          <button
            onClick={() => handleQuantityChange(-1)}
            css={styles.quantityButton}
          >
            -
          </button>
          <span css={styles.quantityText}>{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            css={styles.quantityButton}
          >
            +
          </button>
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
            theme="black"
            width={250}
            height={52}
            fontWeight={700}
            onClick={handleAddToCart}
          />
          <Button
            text=" 구매하기"
            theme="reverse"
            width={250}
            height={52}
            fontWeight={700}
            onClick={handleBuyNow}
          />
        </div>
      </div>
    </div>
  );
}
