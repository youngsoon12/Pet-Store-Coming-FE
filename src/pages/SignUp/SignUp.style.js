import { css } from '@emotion/react';

export const styles = {
  pageContainer() {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      margin-bottom: 30px;

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
      border-top: 1px solid black;

      margin-top: 40px;

      & > button {
        width: 100%;
        padding: 10px 0;
        margin-top: 40px;
        /* padding: 10px 20px; */
        cursor: pointer;
        background-color: #191919;
        color: #fff;
        border: none;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
      }
    `;
  },

  formInputContainer(errorMsg) {
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

      & > .inputRadioField {
        display: flex;
        gap: 20px;
      }

      & > .inputField {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: flex-start;

        gap: 5px;

        & > input {
          width: 100%;
          border: 1px solid
            rgba(${errorMsg ? '255, 77, 79, 1' : '154, 154, 154, 0.6'});
          padding: 5px 10px;
          border-radius: 5px;
          outline: none;
          transition: border 0.3s;
        }

        & > input::placeholder {
          font-size: 12px;
        }

        & > input:focus {
          border-color: ${errorMsg ? '#ff4d4f' : '#141414'};
        }

        & > .errorMsg {
          color: red;
          font-size: 8px;
        }

        & > .infoMsg {
          font-size: 8px;
          color: rgb(154, 154, 154);
        }
      }

      /* & > input {
        flex: 1;
        border: 1px solid rgba(154, 154, 154, 0.4);
        padding: 5px 10px;
        border-radius: 5px;
        outline: none;
        transition: border 0.3s;
      }

      & > input::placeholder {
        font-size: 12px;
      }

      & > input:focus {
        border-color: #141414;
      } */

      border-bottom: 1px solid rgba(154, 154, 154, 0.4);
    `;
  },
};
