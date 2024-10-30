import { css } from '@emotion/react';

export const styles = {
  paragraphBox() {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin-bottom: 35px;
      margin-top: 50px;
    `;
  },

  text(fontSize, fontWeight) {
    return css`
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};

      strong {
        font-weight: 600;
      }
    `;
  },

  inputWrapper() {
    return css`
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
    `;
  },
};
