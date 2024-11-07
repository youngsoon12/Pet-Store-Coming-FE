/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const commonButtonStyles = css`
  border-radius: 7px;
  padding: 1rem;
  cursor: pointer;
`;

export const styles = {
  button: (type, fontSize, fontWeight) => css`
    ${commonButtonStyles};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight};
    background-color: ${type === 'black' ? '#171717' : '#ffffff'};
    color: ${type === 'black' ? '#ffffff' : '#5d5d5d'};
    border: 1px solid ${type === 'black' ? '#171717' : '#5d5d5d'};
    /* cursor: pointer; */
  `,
};
