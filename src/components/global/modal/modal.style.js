import { css } from '@emotion/react';

export const styles = {
  modalOuterContainer() {
    return css`
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1001;
    `;
  },

  modalContainer() {
    return css`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      width: 70vw;
      max-width: 420px;
      min-width: 320px;
      height: 184px;

      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);

      border-radius: 5px;

      background-color: #fff;

      display: flex;
      flex-direction: column;

      align-items: center;
      justify-content: space-between;

      padding: 28px;
    `;
  },

  modalHader() {
    return css`
      & > p {
        font-size: 14px;
        font-weight: 700;
      }
    `;
  },

  modalContent() {
    return css`
      font-size: 14px;
      text-align: center;
      line-height: 20px;
    `;
  },

  modalActionsBtn() {
    return css`
      /* align-self: flex-end; */

      & > button {
        background-color: #171717;
        border-radius: 3px;
        width: 78px;
        padding: 4px;
        color: #fff;
        font-size: 12px;
        border: none;
        cursor: pointer;
      }

      & > button:first-child {
        background-color: #fff;
        border: 1px solid #5d5d5d;
        color: #000;
        margin-right: 10px;
      }
    `;
  },
};
