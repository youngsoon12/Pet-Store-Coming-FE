import { css } from '@emotion/react';

export const styles = {
  container(containerWidth) {
    return css`
      flex-direction: column;
      width: ${containerWidth};
      & input {
        /* flex: 1; */
        border: 1px solid rgba(154, 154, 154, 0.4);
        padding: 5px 10px;
        border-radius: 5px;
        /* outline: none; */
      }
      & > div {
        width: 100%;
        margin-bottom: 8px;
      }
    `;
  },
  zonecode: css`
    width: 100px;
  `,
  btn: css`
    border: 1px solid #d9d9d9;
    background-color: #d9d9d9;
    border-radius: 5px;
    padding: 5px 10px;
    margin-left: 5px;
  `,
  address: css`
    width: 100%;
  `,
};
