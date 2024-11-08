import { css } from '@emotion/react';

export const styles = {
  pageContainer() {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 40px 0;
      width: 100%;
    `;
  },
  headerTitle() {
    return css`
      font-size: 18px;
      font-weight: 600;
    `;
  },

  formContainer() {
    return css`
      width: 70%;
      max-width: 600px;
      min-width: 320px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      /* border-top: 1px solid black; */

      margin-top: 120px;

      & > button {
        margin-top: 40px;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #191919;
        color: #fff;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        width: 100%;
      }
    `;
  },

  formInputContainer() {
    return css`
      width: 100%;
      padding: 20px 10px;
      display: flex;
      align-items: center;

      & > label:first-of-type {
        width: 80px;
        margin-right: 20px;
        color: #9a9a9a;
        font-size: 14px;
        font-weight: 600;
      }

      & > div:last-child {
        display: flex;
        align-items: center;

        & > label:first-of-type {
          margin-right: 13px;
        }
      }

      & input {
        flex: 1;
        border: 1px solid rgba(154, 154, 154, 0.4);
        padding: 8px 10px;
        border-radius: 5px;
        outline: none;
      }

      border-bottom: 1px solid rgba(154, 154, 154, 0.4);
    `;
  },
};
