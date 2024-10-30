import { css } from '@emotion/react';

export const styles = {
  paragraphBox() {
    return css`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin-bottom: 35px;
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
};
