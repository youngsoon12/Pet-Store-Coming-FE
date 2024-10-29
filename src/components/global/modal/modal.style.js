import { css } from '@emotion/react';

export const styles = {
  modalContainer() {
    return css`
      position: fixed;
      width: 340px;
      height: 184px;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
      overflow: hidden;
    `;
  },

  modalHader() {
    return css`
      /* padding: 10px; */

      & > p {
        padding: 7px;
      }

      &::after {
        content: '';
        display: block;
        border-top: 1px solid black;
      }
    `;
  },
};
