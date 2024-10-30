/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './PaymentProductCard.style';

const PaymentProductCard = ({ name, price, discountPrice }) => {
  return (
    <>
      <div css={styles.product_info}>
        <div css={styles.product_info_img}></div>
        <div css={styles.product_info_text}>
          <div css={styles.product_info_text_name}>{name}</div>
          <div css={styles.product_info_text_price}>정상가: {price}원</div>
          <div css={styles.product_info_text_discountPrice}>
            쿠폰적용가:{discountPrice}원
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentProductCard;
