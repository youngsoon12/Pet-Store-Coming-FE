/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './ListCard.style';

const ListCard = ({ name, price, discountPrice, brand, quantity }) => {
  return (
    <>
      <div css={styles.wrap}>
        <div css={styles.product_info}>
          <div css={styles.product_info_img}></div>
          <div css={styles.product_info_text}>
            <div>{brand}</div>
            <div css={styles.product_info_text_name}>{name}</div>
            <div css={styles.product_info_text_price}>
              정상가: {price}원 / 수량 {quantity}개
            </div>
            <div css={styles.product_info_text_discountPrice}>
              할인적용가:{discountPrice}원
            </div>
          </div>
          <div css={styles.button_area}>
            <button css={styles.button_action}>리뷰 작성</button>
            <button css={styles.button_action}>주문 취소</button>
          </div>
        </div>
        <div css={styles.product_info_horizon}></div>
      </div>
    </>
  );
};

export default ListCard;
