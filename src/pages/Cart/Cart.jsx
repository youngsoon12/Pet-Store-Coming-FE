/** @jsxImportSource @emotion/react */

import Header from '../../components/global/Header/Header';
import empty_cart from '@assets/images/Cart/empty_cart.svg';
import { styles } from './Cart.style';
import TabBar from '../../components/global/TabBar/TabBar';
import ContentsWrapper from '../../components/global/ContentsWrapper/ContentsWrapper';
import Button from '../../components/global/button';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  return (
    <>
      <Header type={4} title={'장바구니'} noIcons={true}></Header>
      <ContentsWrapper>
        <div css={styles.container}>
          <img src={empty_cart} alt="빈 장바구니 이미지"></img>
          <div css={styles.phrase}>장바구니에 담긴 상품이 없습니다</div>
          <Button
            text={'상품 담으러 가기'}
            fontSize={16}
            width={200}
            onClick={() => navigate('/shop')}
          />
        </div>
      </ContentsWrapper>
    </>
  );
}
