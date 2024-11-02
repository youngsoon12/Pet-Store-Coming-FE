import { css } from '@emotion/react';

export const styles = {
  button(type, width, fontSize, fontWeight, padding) {
    return css`
      border-radius: 3px;
      font-size: ${fontSize ? fontSize : '14px'};
      font-weight: ${fontWeight ? fontWeight : 'normal'};
      background-color: ${type === 'black' ? '#171717' : '#ffffff'};
      color: ${type === 'black' ? '#ffffff' : '#171717'};
      border: 1px solid ${type === 'black' ? '#171717' : '#d9d9d9'};
      padding: ${padding ? padding : '0.5em 1.2em'};
      width: ${width ? width : 'auto'};
    `;
  },
};
