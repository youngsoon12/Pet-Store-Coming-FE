/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import home from '@assets/images/Header/icons/home.svg';

export default function Home({ handleClick }) {
  const iconStyle = css`
    cursor: pointer;
    width: 22px;
    min-width: 22px;
    height: 22px;
  `;
  return (
    <img
      src={home}
      css={iconStyle}
      onClick={() => handleClick('/')}
      alt="홈 버튼"
    />
  );
}
