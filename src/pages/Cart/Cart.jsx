/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Cart.style';

import empty_cart from '@assets/images/Cart/empty_cart.svg';
import Button from '@components/Cart/Button/Button';
import { cartItems } from './CartData';
import React, { useState } from 'react';
import CheckBox from '../../components/Cart/CheckBox/CheckBox';

export default function Cart() {
  const navigate = useNavigate();
  const [checkItems, setCheckItems] = useState([]);

  const checkItemHandler = (id, isChecked) => {
    if (isChecked) {
      setCheckItems((prev) => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((item) => item !== id));
    }
    console.log(`check된 item들: ${checkItems}`);
  };

  const allCheckedHandler = (e) => {
    if (e.target.checked) {
      setCheckItems(cartItems.map((item) => item.id));
    } else {
      setCheckItems([]);
    }
    console.log(`allCheck = `, e.target.checked);
  };

  return (
    <>
      {cartItems?.length ? (
        <div css={styles.container(false)}>
          <div css={styles.head}>
            <label>
              <input
                type="checkbox"
                onChange={allCheckedHandler}
                checked={checkItems.length === cartItems.length ? true : false}
              />
              전체선택
            </label>
            {/* <div css={styles.checkAll}>전체선택</div> */}
            <div>선택삭제</div>
          </div>
          {cartItems.map((item) => {
            return (
              <div key={item.id} css={styles.itemContainer}>
                <div>
                  <CheckBox
                    id={item.id}
                    checkItemHandler={checkItemHandler}
                    checked={checkItems.includes(item.id) ? true : false}
                  />
                  <Button text={'삭제'}></Button>
                </div>
                <div>
                  <div>
                    <div>{item.name}</div>
                    <div>{item.price}원</div>
                    <div>{item.discountRate}</div>
                    <div>{item.discountPrice}원</div>
                    <div>
                      <button>+</button>
                      <input value={item.quantity}></input>
                      <button>-</button>
                    </div>
                  </div>
                  <img
                    src={item.thumbnail_url}
                    alt={item.thumbnail_alt}
                    css={styles.thumbnail}
                  ></img>
                </div>
                <div>
                  <div>{item.discountPrice * item.quantity}원</div>
                  <Button text={'주문하기'} type={'black'} />
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div css={styles.container(true)}>
          <img src={empty_cart} alt="빈 장바구니 이미지"></img>
          <div css={styles.phrase}>장바구니에 담긴 상품이 없습니다</div>
          <Button
            text={'상품 담으러 가기'}
            fontSize={16}
            fontWeight={'bold'}
            width={200}
            onClick={() => navigate('/shop')}
          />
        </div>
      )}
    </>
  );
}
