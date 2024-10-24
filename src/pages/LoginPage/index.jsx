/** @jsxImportSource @emotion/react */

import { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/login/ui/forms/button/social';
import { socialLoginType } from '@/components/login/data/social';

// Custom 수평선 컴포넌트 import
import HorizontalRole from '@components/login/ui/horizontal_rule';

// 로그인 인풋 관련 import
import TextInput from '@components/login/ui/forms/input/text';
import { loginInputType } from '@components/login/data/login';
import useLoginForm from '@components/login/hook/useLoginForm.js';

import ColumnContainer from '@components/login/\bcontainer';
import Button from '@components/login/ui/forms/button/nomal';
import { css } from '@emotion/react';

import { media } from '@styles/media';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  // Custom Hook 반환값 디스트럭처링 할당
  const { formValues, handleChange } = useLoginForm();

  return (
    <>
      <ColumnContainer>
        {socialLoginType.map((type, id) => (
          <SocialButton
            key={id}
            bgColor={type.bgColor}
            color={type.color}
            border={type.border}
            loginText={type.loginText}
            platformIcon={type.platformIcon}
          />
        ))}
      </ColumnContainer>

      <HorizontalRole text="또는" />

      <ColumnContainer>
        {loginInputType.map((type, id) => (
          <TextInput
            key={id}
            direction={type.direction}
            type={type.type}
            labelText={type.labelText}
            filedId={type.filedId}
            name={type.name}
            placeholder={type.placeholder}
            value={formValues[type.name]}
            onChange={handleChange}
          />
        ))}

        <Button bgColor="#141414" color="#fff" text="로그인" />

        <div css={authOptions}>
          <div css={authLinks}>
            <span css="findId">아이디 찾기</span>
            <span css="findPassword">비밀번호 찾기</span>
          </div>
          <div css="signupLink">
            <span css="signup">회원가입</span>
          </div>
        </div>
      </ColumnContainer>
    </>
  );
}

const authOptions = css`
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

const authLinks = css`
  color: #9a9a9a;
  display: flex;
  gap: 15px;
`;

export default LoginPage;
