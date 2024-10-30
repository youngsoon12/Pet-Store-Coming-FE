/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { styles } from './Cart.style';

import Header from '../../components/global/Header/Header';
import empty_cart from '@assets/images/Cart/empty_cart.svg';
import ContentsWrapper from '../../components/global/ContentsWrapper/ContentsWrapper';
import Button from '../../components/global/button';
import { cartItems } from './CartData';

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Header type={4} title={'장바구니'} noIcons={true}></Header>
      <ContentsWrapper>
        {cartItems?.length ? (
          <div css={styles.container(false)}>
            <div css={styles.head}>
              <div css={styles.checkAll}>전체선택</div>
              <div>선택삭제</div>
            </div>
            {cartItems.map((item) => {
              return (
                <>
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                  <div>{item.discountRate}</div>
                  <div>{item.discountPrice}</div>
                  <div>
                    <button>+</button>
                    <input value={item.quantity}></input>
                    <button>-</button>
                  </div>
                </>
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
      </ContentsWrapper>
    </>
  );
}
