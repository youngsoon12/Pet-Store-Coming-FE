/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Cart.style';

import empty_cart from '@assets/images/Cart/empty_cart.svg';
import Button from '@components/Cart/Button/Button';
import React, { useState, useEffect } from 'react';
import CheckBox from '../../components/Cart/CheckBox/CheckBox';
import getCartListAPI from '../../apis/CartList/GetCartListAPI';
import { useQuery } from '@tanstack/react-query';
import { decodeToken, getCookie } from '../../util/configCookie';

export default function Cart() {
  const { data: { data: cartData = [] } = {}, isLoading } = useQuery({
    queryKey: ['cartItems'],
    queryFn: getCartListAPI,
  });
  const navigate = useNavigate();
  const [newCartItems, setNewCartItems] = useState([]);
  const [checkItems, setCheckItems] = useState([]);
  const token = getCookie('token');
  const userInfo = decodeToken(token);
  console.log(userInfo);

  // cartData 초기화
  useEffect(() => {
    if (cartData.length) {
      setNewCartItems(cartData);
    }
  }, [cartData]);

  const checkItemHandler = (id, isChecked) => {
    setCheckItems((prev) =>
      isChecked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const allCheckedHandler = (e) => {
    setCheckItems(
      e.target.checked ? newCartItems.map((item) => item.productId) : []
    );
  };

  // 수량 업데이트 함수
  const handleQuantityChange = (id, newQuantity) => {
    setNewCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === id
          ? {
              ...item,
              productQuantity: Math.max(
                parseInt(newQuantity, 10),
                1
              ).toString(),
            }
          : item
      )
    );
  };
  console.log(checkItems);
  const onBuyClick = () => {
    const selectedItems = newCartItems.filter((item) =>
      checkItems.includes(item.productId)
    );
    navigate('/order', { state: { selectedItems } });
  };
  console.log(checkItems);
  console.log(newCartItems);
  // 선택된 상품 삭제
  const deleteCheckedItem = () => {
    setNewCartItems((prevItems) =>
      prevItems.filter((item) => !checkItems.includes(item.productId))
    );
    setCheckItems([]);
  };

  // 선택된 상품 수량 및 가격 계산
  const [totalCnt, setTotalCnt] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
  const calculateTotal = () => {
    const total = newCartItems.reduce(
      (acc, item) => {
        if (checkItems.includes(item.productId)) {
          const quantity = parseInt(item.productQuantity, 10);
          acc.totalCnt += quantity;
          acc.totalPrice += item.productPrice * quantity;
          acc.totalDiscountPrice += item.productDiscountPrice * quantity;
        }
        return acc;
      },
      { totalCnt: 0, totalPrice: 0, totalDiscountPrice: 0 }
    );

    setTotalCnt(total.totalCnt);
    setTotalPrice(total.totalPrice);
    setTotalDiscountPrice(total.totalDiscountPrice);
  };

  // 선택된 상품이나 장바구니 항목이 변경될 때마다 총액 재계산
  useEffect(() => {
    calculateTotal();
  }, [checkItems, newCartItems]);

  if (isLoading) {
    return <div>장바구니 불러오는 중 ...</div>;
  }

  return (
    <>
      {newCartItems.length ? (
        <>
          <div css={styles.container(false)}>
            <div css={styles.head}>
              <CheckBox
                id="all"
                checkItemHandler={allCheckedHandler}
                checked={checkItems.length === newCartItems.length}
                labelText="전체선택"
              />
              <div onClick={deleteCheckedItem}>선택삭제</div>
            </div>
            {newCartItems.map((item) => (
              <div key={item.productId} css={styles.itemBox}>
                <div>
                  <CheckBox
                    id={item.productId}
                    checkItemHandler={(id, isChecked) =>
                      checkItemHandler(item.productId, isChecked)
                    }
                    checked={checkItems.includes(item.productId)}
                    name="selected"
                    value={item.productName}
                  />
                  <Button
                    text="삭제"
                    onClick={() => deleteCheckedItem(item.productId)}
                    fontSize="12px"
                  />
                </div>
                <div>
                  <div css={styles.infoBox}>
                    <div css={styles.name}>{item.productName}</div>
                    <div>{item.productPrice.toLocaleString()}원</div>
                    <div css={styles.discountBox}>
                      {item.productDiscountPrice.toLocaleString()}원
                    </div>
                    <div css={styles.quantityBox}>
                      <button
                        css={styles.minusBtn}
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            parseInt(item.productQuantity) - 1
                          )
                        }
                      >
                        -
                      </button>
                      <input
                        value={item.productQuantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            item.productId,
                            parseInt(e.target.value, 10) || 1
                          )
                        }
                        css={styles.quantityInput}
                      />
                      <button
                        css={styles.plusBtn}
                        onClick={() =>
                          handleQuantityChange(
                            item.productId,
                            parseInt(item.productQuantity) + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <img
                    src={item.productImageUrl}
                    alt={item.productName}
                    css={styles.thumbnail}
                  />
                </div>
                <div css={styles.priceBox}>
                  <div>
                    <strong>
                      {(
                        item.productDiscountPrice *
                        parseInt(item.productQuantity)
                      ).toLocaleString()}
                    </strong>
                    원
                  </div>
                  <Button text="주문하기" type="black" fontWeight="bold" />
                </div>
              </div>
            ))}
            <div css={styles.totalPriceBox}>
              <div>
                <div css={styles.title}>주문 상품수</div>
                <div>{totalCnt}개</div>
              </div>
              <div>
                <div css={styles.title}>총 주문금액</div>
                <div>{totalPrice.toLocaleString()}원</div>
              </div>
              <div>
                <div css={styles.title}>최종 결제금액</div>
                <div>{totalDiscountPrice.toLocaleString()}원</div>
              </div>
            </div>
          </div>
          <button
            css={styles.orderBtn}
            onClick={onBuyClick}
            disabled={totalDiscountPrice === 0}
          >
            {totalDiscountPrice.toLocaleString()}원 구매하기
          </button>
        </>
      ) : (
        <div css={styles.container(true)}>
          <img src={empty_cart} alt="빈 장바구니 이미지" />
          <div css={styles.phrase}>장바구니에 담긴 상품이 없습니다</div>
          <Button
            text="상품 담으러 가기"
            fontSize={16}
            fontWeight="bold"
            width={200}
            onClick={() => navigate('/shop')}
          />
        </div>
      )}
    </>
  );
}
