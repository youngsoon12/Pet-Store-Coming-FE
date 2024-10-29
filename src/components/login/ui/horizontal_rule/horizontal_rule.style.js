import { css } from '@emotion/react';

export const styles = {
  line() {
    return css`
      width: 100%;
      height: 1px;
      box-sizing: border-box;
      border-radius: 7px;
      font-weight: 600;

      max-width: 400px;
      margin: 35px 0;

      background-color: rgba(154, 154, 154, 0.4);

      display: flex;
      justify-content: center;
      align-items: center;
    `;
  },

  text() {
    return css`
      display: block;
      font-size: 14px;
      padding: 0 15px;
      background-color: #fff;
      color: #9a9a9a;
      font-weight: 400;
    `;
  },
};
