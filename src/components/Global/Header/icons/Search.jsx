/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import search from '@assets/images/Header/icons/search.svg';

export default function Search({ handleClick }) {
  const iconStyle = css`
    cursor: pointer;
    width: 22px;
    min-width: 22px;
    height: 22px;
  `;
  return (
    <img
      src={search}
      css={iconStyle}
      onClick={() => handleClick('/search')}
      alt="검색 버튼"
    />
  );
}
