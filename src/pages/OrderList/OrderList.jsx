/** @jsxImportSource @emotion/react */

import { React, useEffect } from 'react';
import { styles } from './OrderList.style';
import ListCard from './listCard';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

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
const userId = 'a233338f-0ff7-4cb6-ad90-fbf514720088';
const OrderList = () => {
  // const orderData = async () => {
  //   const response = await axios(
  //     `http://localhost:8080/api/orders/user/a233338f-0ff7-4cb6-ad90-fbf514720088/items`
  //   );
  //   return response.data;
  // };

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['orderItems', userId],
  //   queryFn: orderData,
  // });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  // console.log(data);
  useEffect(() => {
    axios(
      `${import.meta.env.VITE_API_URL}/api/orders/user/3e6df3af-d038-4b94-a327-92ab30a88749/items`
    ).then((res) => console.log(res));
  }, []);

  return (
    <>
      <div css={styles.container}>
        <div css={styles.productArea}>
          <div css={styles.title}>주문 내역</div>
          <div css={styles.productCard_area}>
            {productInfo &&
              productInfo.map((product, idx) => {
                return (
                  <ListCard
                    key={idx}
                    name={product.name}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    brand={product.brand}
                    quantity={product.quantity}
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
