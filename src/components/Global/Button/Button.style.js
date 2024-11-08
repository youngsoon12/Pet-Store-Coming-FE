/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const commonButtonStyles = css`
  border-radius: 7px;
  padding: 1rem;
  cursor: pointer;
`;

export const styles = {
  button: (theme, fontSize, fontWeight, padding, border) => css`
    ${commonButtonStyles};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    background-color: ${theme === 'black' ? '#171717' : '#ffffff'};
    color: ${theme === 'black' ? '#ffffff' : '#5d5d5d'};
    border: ${border
      ? border
      : `1px solid ${theme === 'black' ? '#171717' : '#5d5d5d'}`};
    padding: ${padding || '0px'};
  `,
};
