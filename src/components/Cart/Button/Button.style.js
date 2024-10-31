import { css } from '@emotion/react';

export const styles = {
  button(type, width, fontSize, fontWeight, padding) {
    return css`
      border-radius: 5px;
      font-size: ${fontSize ? fontSize : '14px'};
      font-weight: ${fontWeight ? fontWeight : 'normal'};
      background-color: ${type === 'black' ? '#171717' : '#ffffff'};
      color: ${type === 'black' ? '#ffffff' : '#171717'};
      border: 1px solid ${type === 'black' ? '#171717' : '#5d5d5d'};
      padding: ${padding ? padding : '0.4rem 1.2rem'};
      width: ${width ? width : 'auto'};
    `;
  },
};
