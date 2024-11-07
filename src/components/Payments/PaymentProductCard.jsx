/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './PaymentProductCard.style';

const PaymentProductCard = ({
  name,
  price,
  discountPrice,
  brand,
  quantity,
  src,
}) => {
  return (
    <>
      <div css={styles.wrap}>
        <div css={styles.product_info}>
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
          <img src={src} css={styles.product_info_img} />
        </div>
        <div css={styles.product_info_horizon}></div>
      </div>
    </>
  );
};

export default PaymentProductCard;
