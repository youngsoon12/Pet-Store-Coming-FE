import { css } from '@emotion/react';

export const styles = {
  flexContainer() {
    return css`
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 20px;
      align-items: center;
    `;
  },

  inputContainer() {
    return css`
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;

      & > label {
        font-size: 12px;
        color: #9a9a9a;
        font-weight: bold;
      }

      & > input::placeholder {
        font-size: 13px;
      }

      & > input {
        font-size: 14px;
        border: 1px solid #c2c6cc;
        display: flex;
        border-radius: 7px;
        padding: 6px 8px;
        outline: none;
        transition: 0.3s;
      }

      & > input:focus {
        border: 1px solid #141414;
      }
    `;
  },

  submitBtn() {
    return css`
      width: 100%;
      margin-top: 5px;
      border: 1px solid black;
      background-color: #171717;
      color: #fff;

      height: 30px;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 7px;
      font-weight: 600;
      font-size: 14px;

      border: none;
      outline: none;
    `;
  },

  resultText(error) {
    return css`
      text-align: center;
      font-size: 14px;
      color: ${!error ? '#171717' : '#ff4d4f'};
      font-weight: 600;
    `;
  },

  sliderContainer() {
    return css`
      margin-top: 10px;
      max-width: 337.39px;
      overflow: hidden;
    `;
  },

  slider(resetPassword) {
    return css`
      width: 337.39px;
      display: flex;
      align-items: center;
      transition: transform 0.6s;
      transform: translateX(${resetPassword && '-347.39px'});
    `;
  },
  slider_left() {
    return css`
      width: 337.39px;
      margin-right: 10px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;
  },
  slider_right() {
    return css`
      width: 337.39px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    `;
  },
};
