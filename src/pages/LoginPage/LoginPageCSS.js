import { css } from '@emotion/react';

export const styles = {
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
