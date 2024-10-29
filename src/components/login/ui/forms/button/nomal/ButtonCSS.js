import { css } from '@emotion/react';

export const styles = (bgColor, color) => {
  return css`
    height: 45px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 7px;
    font-weight: 600;

    margin-top: 10px;

    background-color: ${bgColor};
    border: none;
    outline: none;
    color: ${color};

    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
