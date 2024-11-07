import { css } from '@emotion/react';

export const styles = (bgColor, color, width, marginTop) => {
  return css`
    width: ${width ? width : '80%'};
    height: 45px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 7px;
    font-weight: 600;
    font-size: 14px;

    max-width: 400px;
    margin-top: ${marginTop ? marginTop : '10px'};

    background-color: ${bgColor};
    border: none;
    outline: none;
    color: ${color};

    display: flex;
    justify-content: center;
    align-items: center;
  `;
};
