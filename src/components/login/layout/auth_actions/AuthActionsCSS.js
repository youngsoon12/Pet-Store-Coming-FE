import { css } from '@emotion/react';

const styles = {
  authOptions() {
    return css`
      width: 100%;

      max-width: 400px;
      min-width: 183px;

      display: flex;
      justify-content: space-between;

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
