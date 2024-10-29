import { css } from '@emotion/react';

export const styles = {
  filed(direction) {
    return css`
      width: 100%;
      border-radius: 7px;
      font-weight: 600;

      max-width: 400px;

      display: flex;
      flex-direction: ${direction === 'v' && 'column'};
      gap: ${direction === 'v' && '8px'};
      align-items: ${direction === 'h' && 'center'};
    `;
  },

  label(direction) {
    return css`
      color: ${direction ? '#333' : '#9A9A9A'};
      font-weight: 600;
      font-size: 14px;
      width: fit-content;
    `;
  },

  input(errorMsg) {
    return css`
      display: block;
      box-sizing: border-box;
      outline: none;
      border: 0.5px solid
        rgba(${errorMsg ? '255, 77, 79, 1' : '154, 154, 154, 0.6'});
      padding: 0 20px 0 8px;
      height: 45px;
      border-radius: 7px;

      transition: border 0.3s;

      &::placeholder {
        color: #a8a8a8;
      }

      &:focus {
        border-color: ${errorMsg ? '#ff4d4f' : '#141414'};
      }
    `;
  },

  errorMsg() {
    return css`
      font-size: 10px;
      height: 10px;
      color: #ff4d4f;
    `;
  },
};
