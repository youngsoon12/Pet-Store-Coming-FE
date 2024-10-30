/** @jsxImportSource @emotion/react */

import React from 'react';
import PaymentBtn from '../../components/Payments/PaymentBtn';
import { styles } from './Payments.style';

const Payments = () => {
  return (
    <div css={styles.container}>
      <div css={styles.infoArea}>
        <div css={styles.title}>배송 정보</div>
        <div css={styles.info_input_area}>
          <div css={styles.info_label}>배송지명</div>
          <input css={styles.info_input}></input>
        </div>
        <div css={styles.info_input_area}>
          <div css={styles.info_label}>수령인</div>
          <div></div>
        </div>
        <div css={styles.info_input_area}>
          <div css={styles.info_label}>배송지</div>
          <div></div>
        </div>
        <div css={styles.info_input_area}>
          <div css={styles.info_label}>연락처</div>
          <div></div>
        </div>
      </div>
      <div css={styles.productArea}>
        <div css={styles.title}>상품 정보</div>
      </div>
      <div css={styles.paymentArea}>
        <div css={styles.title}>결제금액</div>
      </div>
    </div>
  );
};

export default Payments;
