/** @jsxImportSource @emotion/react */
import React from 'react';
import { styles } from './global_title.style.js';
import globalTitleBackIcon from '../../../assets/images/GlobalTitle/globalTitleBackIcon.svg';
import { useNavigate } from 'react-router-dom';

// 스타일 정의를 컴포넌트 위로 이동
const GlobalTitle = ({ text, arrow }) => {
  // 글자부분을 Props로 입력 받기
  const navigate = useNavigate();
  const { container, titleText, backIcon } = styles; // 스타일 구조분해 할당

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동 시키는 함수
  };

  return (
    <div css={container}>
      {arrow ? (
        <img
          css={backIcon}
          src={globalTitleBackIcon}
          alt="Global Title Background"
          onClick={goBack}
        />
      ) : (
        <img
          css={backIcon}
          src={globalTitleBackIcon}
          alt="Global Title Hidden"
          style={{ visibility: 'hidden' }}
          onClick={goBack}
        />
      )}
      <p css={titleText}>{text}</p>
    </div>
  );
};

export default GlobalTitle;
