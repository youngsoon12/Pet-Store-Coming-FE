import { css } from '@emotion/react';
import { media } from '@/styles/media';

export const styles = {
  button(props) {
    return css`
      width: 100%;
      height: 45px;
      cursor: pointer;
      box-sizing: border-box;
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
      
      background-color: ${props.bgColor};
      border: ${props.border};
      color: ${props.color};

      display: flex;
      justify-content: center;
      align-items: center;
    `;
  },

  container() {
    return css`
      display: flex;
      align-items: center;
      gap: 10px;
    `;
  },
};
