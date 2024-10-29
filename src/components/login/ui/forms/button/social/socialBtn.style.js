import { css } from '@emotion/react';

export const styles = {
  button(props) {
    return css`
      width: 100%;
      height: 45px;
      cursor: pointer;
      box-sizing: border-box;
      border-radius: 7px;
      font-weight: 600;

      background-color: ${props.bgColor};
      border: ${props.border};
      color: ${props.color};

      display: flex;
      justify-content: center;
      align-items: center;
    `;
  },

  container() {
    return css`
      display: flex;
      align-items: center;
      gap: 10px;
    `;
  },
};
