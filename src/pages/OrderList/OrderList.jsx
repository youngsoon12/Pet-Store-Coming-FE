/** @jsxImportSource @emotion/react */

import { React, useEffect } from 'react';
import { styles } from './OrderList.style';
import ListCard from './listCard';
import { useQuery } from '@tanstack/react-query';
import { getOrderListAPI } from '../../apis/OrderList/getOrderListAPI';

const userId = '3e6df3af-d038-4b94-a327-92ab30a88749';
const OrderList = () => {
  const {
    data: orderList,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['orderItems', userId],
    queryFn: () => getOrderListAPI(userId), // queryFn을 함수로 전달
  });

  if (isLoading) return <div>주문내역 불러오는중 ...</div>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(orderList);
  return (
    <>
      <div css={styles.container}>
        <div css={styles.productArea}>
          <div css={styles.title}>
            주문 내역
            <span
              style={{
                color: '#ed5729',
                fontWeight: '900',
                marginLeft: '10px',
              }}
            >
              {orderList.length}
            </span>
            건
          </div>
          <div css={styles.productCard_area}>
            {orderList &&
              orderList.map((product, idx) => {
                return (
                  <ListCard
                    key={idx}
                    orderItemId={product.orderItemId}
                    orderId={product.orderId}
                    name={product.productName}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    quantity={product.quantity}
                    src={product.thumbnailImageUrl}
                    status={product.status}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderList;
