/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '@assets/images/Header/logos/logo.svg';
import dogLogo from '@assets/images/Header/logos/dog_logo.svg';

export default function Logo({ handleClick, dog }) {
  const logoStyle = css`
    width: 64px;
    min-width: 64px;
    height: 19px;
    cursor: pointer;
  `;
  const dogLogoStyle = css`
    width: 90px;
    min-width: 90px;
    height: 20px;
    cursor: pointer;
  `;
  return (
    <img
      src={dog ? dogLogo : logo}
      css={dog ? dogLogoStyle : logoStyle}
      onClick={() => handleClick('/')}
      alt="로고"
    />
  );
}
