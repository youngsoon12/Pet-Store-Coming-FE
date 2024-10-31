/** @jsxImportSource @emotion/react */

import React from 'react';
import PaymentBtn from '../../components/Payments/PaymentBtn';
import PaymentProductCard from '../../components/Payments/PaymentProductCard';
import Header from '../../components/global/Header/Header';
import TabBar from '../../components/global/TabBar/TabBar';
import ContentsWrapper from '../../components/global/ContentsWrapper/ContentsWrapper';
import { styles } from './Payments.style';

const productInfo = [
  {
    brand: '버켄스탁',
    name: '취리히 스웨이드 레더 토프 레귤러',
    quantity: 3,
    price: '90,000', 
    discountPrice: '73,217',
  },
  {
    brand: '왕티',
    name: '멀티 채코보드 에코 풀백',
    quantity: 4,
    price: '90,000',
    discountPrice: '73,217',
  },
];

const Payments = () => {
  return (
    <>
      <Header type={1} />
      <ContentsWrapper>
        <div css={styles.container}>
          <div css={styles.infoArea}>
            <div css={styles.title_area}>
              <div css={styles.title}>배송 정보</div>
              <div css={styles.warn}>
                <span css={styles.red_star}>*</span>표시는 필수
                <br />
                입력 항목
              </div>
            </div>
            <div css={styles.info_input_area}>
              <div css={styles.info_label}>배송지명</div>
              <input css={styles.info_input}></input>
            </div>
            <div css={styles.info_input_area}>
              <div css={styles.info_label}>수령인</div>
              <input css={styles.info_input}></input>
            </div>
            <div css={styles.info_input_area}>
              <div css={styles.info_label}>배송지</div>
              <input css={styles.info_input}></input>
            </div>
            <div css={styles.info_input_area}>
              <div css={styles.info_label}>연락처</div>
              <div css={styles.info_input_phone_container}>
                <input css={styles.info_input_phone} />
                <p css={styles.info_input_phone_tag}>-</p>
                <input css={styles.info_input_phone} />
                <p css={styles.info_input_phone_tag}>-</p>
                <input css={styles.info_input_phone} />
              </div>
            </div>
          </div>
          <div css={styles.horizon} />
          <div css={styles.productArea}>
            <div css={styles.title}>상품 정보</div>
            <div css={styles.productCard_area}>
              {productInfo &&
                productInfo.map((product, idx) => {
                  return (
                    <PaymentProductCard
                      key={idx}
                      name={product.name}
                      price={product.price}
                      discountPrice={product.discountPrice}
                      brand={product.brand}
                    />
                  );
                })}
            </div>
          </div>

          <div css={styles.horizon} />
          <div css={styles.paymentArea}>
            <div css={styles.payment_container}>
              <div css={styles.payment_title}>결제금액</div>
              <div css={styles.payment_horizon} />
            </div>
          </div>
        </div>
      </ContentsWrapper>
      <PaymentBtn totalAmount={'10,000'} />
    </>
  );
};

export default Payments;
