import { css } from '@emotion/react';
import { media } from '@styles/media';

export const styles = {
  container() {
    return css`
      width: 100%;

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
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: 16px;
    `;
  },
};
