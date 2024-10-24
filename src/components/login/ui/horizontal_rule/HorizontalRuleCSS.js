import { css } from '@emotion/react';
import { media } from '@/styles/media';

export const styles = {
  line() {
    return css`
      width: 100%;
      height: 1px;
      box-sizing: border-box;
      border-radius: 7px;
      font-weight: 600;

      max-width: 400px;
      min-width: 183px;

      margin: 35px 0;

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
      
      background-color: rgba(154, 154, 154, 0.6);

      display: flex;
      justify-content: center;
      align-items: center;
    `;
  },

  text() {
    return css`
      display: block;
      padding: 0 15px;
      background-color: #fff;
      color: #9a9a9a;
      font-weight: 400;
    `;
  },
};
