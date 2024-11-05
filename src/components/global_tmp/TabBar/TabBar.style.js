import { css } from '@emotion/react';

export const styles = {
  container: css`
    width: 100%;
    height: 56px;
    background-color: #efefef;
    display: flex;
    position: sticky;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;

    & a {
      text-decoration: none;
      color: inherit;
    }
  `,
  menu: css`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    text-align: center;

    & > img {
      width: 24px;
      height: 24px;
    }
    & > div {
      font-size: 10px;
      text-align: center;
    }
  `,
  //   icon: css`
  //     width: 24px;
  //     height: 24px;
  //   `,
};
