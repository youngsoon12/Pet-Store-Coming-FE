import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset} // 모든 브라우저에서 기본적으로 제공하는 CSS 초기화

  * {
    font-family: 'Pretendard', sans-serif;
  }

  body {
    width: 100%;
    margin: 0;
    padding: 0;
    min-width: 320px;
    min-height: 100vh;
    overflow-x: hidden;
    justify-content: flex-start;
    align-items: center;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    -ms-overflow-style: none;
    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
      display: none;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
