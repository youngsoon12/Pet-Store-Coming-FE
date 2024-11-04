/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Cart.style';

import empty_cart from '@assets/images/Cart/empty_cart.svg';
import Button from '@components/Cart/Button/Button';
import { cartItems } from './CartData';
import React, { useState, useEffect } from 'react';
import CheckBox from '../../components/Cart/CheckBox/CheckBox';

export default function Cart() {
  const navigate = useNavigate();
  const [newCartItems, setNewCartItems] = useState(cartItems);
  const [checkItems, setCheckItems] = useState([]);

  const checkItemHandler = (id, isChecked) => {
    setCheckItems((prev) =>
      isChecked ? [...prev, id] : checkItems.filter((item) => item !== id)
    );
  };
  useEffect(() => {
    console.log(`check된 item들: ${checkItems}`);
  }, [checkItems]);

  const allCheckedHandler = (e) => {
    setCheckItems(e.target.checked ? cartItems.map((item) => item.id) : []);

    console.log(`allCheck = `, e.target.checked);
  };

  // 수량 업데이트 함수
  const handleQuantityChange = (id, newQuantity) => {
    setNewCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  // 장바구니에서 해당 상품 삭제
  const deleteItem = (id) => {
    setNewCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setCheckItems((prevItems) => prevItems.filter((item) => item !== id));
  };

  // 선택된 상품 삭제
  const deleteCheckedItem = () => {
    setNewCartItems((prevItems) =>
      prevItems.filter((item) => !checkItems.includes(item.id))
    );
    setCheckItems([]);
  };

  // 선택된 상품 수량 및 가격 계산
  const [totalCnt, setTotalCnt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const calculateTotal = () => {
    const total = newCartItems.reduce(
      (acc, item) => {
        if (checkItems.includes(item.id)) {
          acc.totalCnt += item.quantity;
          acc.totalPrice += item.discountPrice * item.quantity;
        }
        return acc;
      },
      { totalCnt: 0, totalPrice: 0 }
    );

    setTotalCnt(total.totalCnt);
    setTotalPrice(total.totalPrice);
  };

  // 선택된 상품이나 장바구니 항목이 변경될 때마다 총액 재계산
  useEffect(() => {
    calculateTotal();
  }, [checkItems, newCartItems]);

  return (
    <>
      {cartItems?.length ? (
        <div css={styles.container(false)}>
          <div css={styles.head}>
            <CheckBox
              id={'all'}
              checkItemHandler={allCheckedHandler}
              checked={checkItems.length === cartItems.length ? true : false}
              labelText={'전체선택'}
            />
            <div onClick={deleteCheckedItem}>선택삭제</div>
          </div>
          {newCartItems.map((item) => {
            return (
              <div key={item.id} css={styles.itemBox}>
                <div>
                  <CheckBox
                    id={item.id}
                    checkItemHandler={checkItemHandler}
                    checked={checkItems.includes(item.id)}
                    name={'selected'}
                    value={item.name}
                  />
                  <Button
                    text={'삭제'}
                    onClick={() => deleteItem(item.id)}
                    fontSize={'12px'}
                  ></Button>
                </div>
                <div>
                  <div css={styles.infoBox}>
                    <div css={styles.name}>{item.name}</div>
                    <div>{item.price.toLocaleString()}원</div>
                    <div css={styles.discountBox}>
                      [{item.discountRate}%]{' '}
                      {item.discountPrice.toLocaleString()}원
                    </div>
                    <div css={styles.quantityBox}>
                      <button
                        css={styles.minusBtn}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.id,
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                        css={styles.quantityInput}
                      ></input>
                      <button
                        css={styles.plusBtn}
                        onClick={() =>
                          handleQuantityChange(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <img
                    src={item.thumbnail_url}
                    alt={item.thumbnail_alt}
                    css={styles.thumbnail}
                  ></img>
                </div>
                <div css={styles.priceBox}>
                  <div>
                    <strong>
                      {(item.discountPrice * item.quantity).toLocaleString()}
                    </strong>
                    원
                  </div>
                  <Button
                    text={'주문하기'}
                    type={'black'}
                    fontWeight={'bold'}
                  />
                </div>
              </div>
            );
          })}
          <div css={styles.totalPriceBox}>
            <div>
              <div>주문 상품수</div>
              <div>{totalCnt}개</div>
            </div>
            <div>
              <div>총 주문금액</div>
              <div>{totalPrice}원</div>
            </div>
            {/* <div>
            <div>총 배송비</div>
            <div>{checkItems.length}원</div>
            </div> */}
            <div>
              <div>최종 결제금액</div>
              <div>{totalPrice}원</div>
            </div>
          </div>
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
