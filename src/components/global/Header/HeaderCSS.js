/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import logo from '@assets/images/header/logos/logo.svg';
import subLogo from '@assets/images/header/logos/subLogo.svg';
import user from '@assets/images/header/icons/user.svg';
import wish from '@assets/images/header/icons/heart.svg';
import cart from '@assets/images/header/icons/cart.svg';
import search from '@assets/images/header/icons/search.svg';

export const styles = {
  headerWrap: css`
    background-color: rgba(230, 230, 230, 0.4);
    backdrop-filter: blur(3px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
    height: 75px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 100px;
    padding: 0 60px;
    box-sizing: border-box;
    position: fixed; /* 헤더를 화면에 고정 */
    top: 0;
    left: 0;
    z-index: 1000; /* 헤더가 다른 요소들 위에 표시되도록 설정 */
  `,

  logo: css`
    width: 100px;
    min-width: 100px;
    height: 75px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition: background-image 0.3s ease-in-out;

    &:hover {
      background-image: url(${subLogo});
      width: 100px;
      min-width: 100px;
    }
  `,

  categoryArea: css`
    display: flex;
    /* column-gap: 10%; */
    gap: 35px; /* 카테고리 간의 간격을 조정 */
    font-size: 18px;
    & > div {
      cursor: pointer;
    }
  `,
  buttonArea: css`
    display: flex;
    /* column-gap: 15%; */
    gap: 20px; /* 버튼과 아이콘 간의 간격 */
    margin-left: auto;
    align-items: center;
  `,

  buttons: css`
    display: flex;
    /* column-gap: 10%; */
    gap: 15px; /* 로그인과 회원가입 간의 간격 */

    & > div {
      cursor: pointer;
      height: fit-content;
      line-height: normal;
      font-size: 14px;
    }
  `,

  icons: css`
    display: flex;
    /* column-gap: 10%; */
    gap: 15px; /* 각 아이콘 간의 간격 */

    & > div {
      cursor: pointer;
      width: 25px;
      min-width: 25px;
      height: 25px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  `,

  user: css`
    background-image: url(${user});
  `,

  wish: css`
    background-image: url(${wish});
  `,
  cart: css`
    background-image: url(${cart});
  `,
  search: css`
    background-image: url(${search});
  `,
};
