/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import back from '@assets/images/Header/icons/back.svg';

export default function Back({ handleClick }) {
  const iconStyle = css`
    cursor: pointer;
    width: 22px;
    min-width: 22px;
    height: 22px;
  `;
  return (
    <img
      src={back}
      css={iconStyle}
      onClick={() => handleClick(-1)}
      alt="뒤로가기 버튼"
    />
  );
}
