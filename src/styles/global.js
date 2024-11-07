import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const globalStyle = css`
  ${emotionReset} // 모든 브라우저에서 기본적으로 제공하는 CSS 초기화

  * {
    font-family: 'Pretendard', sans-serif;
  }

  html {
    font-family: 'Pretendard', sans-serif;
    box-sizing: border-box; // 요소 크기를 계산할 때 패딩과 테두리 포함
    font-family:
      /* 'Pretendard', */
      'Pretendard Variable',
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      'Helvetica Neue',
      'Segoe UI',
      'Apple SD Gothic Neo',
      'Noto Sans KR',
      'Malgun Gothic',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      sans-serif;
  }

  body {
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    justify-content: center;

    font-family: 'Pretendard', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-overflow-style: none;
    scrollbar-width: none;
    .scroll::-webkit-scrollbar {
      display: none;
    }
    background-color: #f8f8f8;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
