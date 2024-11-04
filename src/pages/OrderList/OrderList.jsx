/** @jsxImportSource @emotion/react */

import React from 'react';
import { styles } from './OrderList.style';
import PaymentProductCard from '../../components/Payments/PaymentProductCard';

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

const OrderList = () => {
  return (
    // <div css={styles.container}>
    //   <div css={styles.productArea}>
    //     <div css={styles.title}>상품 정보</div>
    //     <div css={styles.productCard_area}>
    //       {productInfo &&
    //         productInfo.map((product, idx) => {
    //           return (
    //             <PaymentProductCard
    //               key={idx}
    //               name={product.name}
    //               price={product.price}
    //               discountPrice={product.discountPrice}
    //               brand={product.brand}
    //               quantity={product.quantity}
    //             />
    //           );
    //         })}
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
};

export default OrderList;
