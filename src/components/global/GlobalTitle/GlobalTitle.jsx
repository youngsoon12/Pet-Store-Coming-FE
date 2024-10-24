/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './GlobalTitleCSS';
import globalTitleBackIcon from '@assets/images/GlobalTitle/globalTitleBackIcon.svg';

// 스타일 정의를 컴포넌트 위로 이동
const GlobalTitle = ({ text }) => { // 글자부분을 Props로 입력 받기
  const { container, titleText } = styles; // 스타일 구조분해 할당
  return (
    <div css={container}>
      <img src={globalTitleBackIcon} alt="Global Title Background" />  
      <p css={titleText}>{text}</p>
    </div>
  );
};

export default GlobalTitle;
