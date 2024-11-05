/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import cart from '@assets/images/header/icons/cart.svg';

export default function Cart({ handleClick }) {
  const iconStyle = css`
    cursor: pointer;
    width: 22px;
    min-width: 22px;
    height: 22px;
  `;
  return (
    <img
      src={cart}
      css={iconStyle}
      onClick={() => handleClick('/cart')}
      alt="장바구니 버튼"
    />
  );
}
