import { css } from '@emotion/react';

const styles = {
  authOptions() {
    return css`
      width: 80%;

      display: flex;
      justify-content: space-between;

      max-width: 400px;

      & span {
        font-size: 14px;
        cursor: pointer;
      }
    `;
  },

  authLinks() {
    return css`
      color: #9a9a9a;
      display: flex;
      gap: 15px;
    `;
  },
};

export default styles;
