import { css } from '@emotion/react';

export const styles = {
  container(gap) {
    return css`
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: ${gap}px;
    `;
  },
};
