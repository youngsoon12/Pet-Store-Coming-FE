import { css } from '@emotion/react';

export const styles = {
  headerContainer: css`
    background-color: rgba(255, 255, 255, 0.7);
    /* background-color: rgba(1, 1, 1, 0.7); */
    backdrop-filter: blur(20px);
    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); */
    height: 52px;
    min-height: 52px;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8vw;
    padding: 0 20px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
  `,

  logo: css`
    width: 64px;
    min-width: 64px;
    height: 19px;
    cursor: pointer;
  `,
  dogLogo: css`
    width: 90px;
    min-width: 90px;
    height: 20px;
    cursor: pointer;
  `,

  buttonArea: css`
    display: flex;
    margin-left: auto;
    align-items: center;
  `,

  buttons: css`
    display: flex;
    gap: 15px; /* 로그인과 회원가입 간의 간격 */

    & > div {
      cursor: pointer;
      height: fit-content;
      line-height: normal;
      font-size: 14px;
      transition: opacity 0.3s ease-in-out;

      &:hover {
        opacity: 0.4;
      }
    }
  `,

  icons: css`
    display: flex;
    gap: 15px; /* 각 아이콘 간의 간격 */

    & > img {
      cursor: pointer;
      width: 22px;
      min-width: 22px;
      height: 22px;
    }
  `,

  icon: css`
    cursor: pointer;
    width: 22px;
    min-width: 22px;
    height: 22px;
  `,

  title: css`
    font-weight: bold;
    font-size: 18px;
  `,
  // user: css`
  //   background-image: url(${user});
  // `,

  // wish: css`
  //   background-image: url(${wish});
  // `,
  // cart: css`
  //   background-image: url(${cart});
  // `,
  // search: css`
  //   background-image: url(${search});
  // `,
};
