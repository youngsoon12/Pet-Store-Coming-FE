import { css } from '@emotion/react';
import { media } from '@/styles/media';

export const styles = {
  filed(direction) {
    return css`
      width: 100%;
      border-radius: 7px;
      font-weight: 600;

      max-width: 400px;
      min-width: 183px;

      // 1. 데스크탑 화면 Media Query 정의
      ${media.desktop`
        width: 70%;
      `}

      // 2. 태블릿 화면 Media Query 정의
      ${media.tablet`
        width: 60%;
      `}

      // 3. 모바일 화면에 맞는 크기로 큰 틀 정의
      ${media.mobile`
        width: 50%;
      `}
    
      display: flex;
      flex-direction: ${direction === 'v' && 'column'};
      gap: ${direction === 'v' && '8px'};
      align-items: ${direction === 'h' && 'center'};
    `;
  },

  label(direction) {
    return css`
      color: ${direction ? '#333' : '#9A9A9A'};
      font-weight: 600;
      font-size: 14px;
    `;
  },

  input() {
    return css`
      display: block;
      box-sizing: border-box;
      outline: none;
      border: 0.5px solid rgba(154, 154, 154, 0.6);
      padding: 0 20px 0 8px;
      height: 45px;
      border-radius: 7px;

      &::placeholder {
        color: #a8a8a8;
      }
    `;
  },
};
