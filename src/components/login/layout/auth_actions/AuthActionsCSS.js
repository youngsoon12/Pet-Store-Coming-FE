import { css } from '@emotion/react';
import { media } from '@styles/media';

const styles = {
  authOptions() {
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
      justify-content: space-between;

      & span {
        font-size: 14px;
        cursor: pointer;
      }
    `;
  },

  authLinks() {
    return css`
      color: #9a9a9a;
      display: flex;
      gap: 15px;
    `;
  },
};

export default styles;
