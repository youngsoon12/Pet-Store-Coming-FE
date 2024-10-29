import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset} // 모든 브라우저에서 기본적으로 제공하는 CSS 초기화

  * {
    font-family: 'Pretendard', sans-serif;
  }

  body {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
      display: none;
    }
    background-color: gray;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
