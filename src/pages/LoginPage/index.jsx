/** @jsxImportSource @emotion/react */
import { styles } from './login_page.style.js';

import { useEffect, useMemo, useState } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/login/ui/forms/button/social';
import Icon from '@/components/login/ui/icon';
import kakaoLogo from '@assets/images/login/logo/kakao.svg';

// Custom 수평선 컴포넌트 import
import HorizontalRole from '@components/login/ui/horizontal_rule';

// 로그인 인풋 관련 import
import TextInput from '@components/global/input';
import { loginInputType } from '@components/login/data/login';

import Container from '@components/login/container';
import Button from '@components/login/ui/forms/button/nomal';
import AuthActions from '@components/login/layout/auth_actions';

// Custom Hook
import useLoginForm from '@components/login/hook/useLoginForm.js';
import useLoginValidation from '@components/login/hook/useLoginValidation';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  // Custom Hook
  const { formValues, handleChange } = useLoginForm();
  const { loginErrors, validateLogin } = useLoginValidation();

  // 카카오 로그인 버튼 클릭 이벤트 핸들러
  const handleKakaoLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_REST_API; // REST API 키
    const REDIRECT_ID = import.meta.env.VITE_REDIRECT_URI; // Redirect URL

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_ID}&response_type=code`;

    // 카카오 로그인 팝업 창 열람
    const newPopup = window.open(
      KAKAO_AUTH_URL,
      '_blank',
      'width=500, height=600'
    );

    const interval = setInterval(() => {
      if (newPopup.closed) {
        clearInterval(interval);
      }
    }, 1000);
  };

  // Login Button Form Action
  const handleLogin = (event) => {
    event.preventDefault();

    // 유효성 검사를 통과 했을 경우
    if (validateLogin(formValues.login_email, formValues.login_password)) {
      console.log('Hello');
    }
  };

  useEffect(() => {
    const handleMessage = async (event) => {
      if (event.origin !== 'http://localhost:5173') {
        return;
      }

      if (event.data.type === 'KAKAO_AUTH_CODE') {
        const authCode = event.data.code;

        try {
          const accessToken = await apiClass.fetchAccessToken(authCode);
          await apiClass.fetchUserInfo(accessToken);
        } catch (error) {
          console.log(error);
        }
      }
    };
    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      <Container>
        <div css={styles.paragraphBox()}>
          <h2 css={styles.text(18, 600)}>로그인</h2>
          <p css={styles.text()}>
            <strong>꼬밍</strong>과 함께 반려견 용품 쇼핑생황을 즐겨보세요!
          </p>
        </div>

        {/* 소셜 로그인 컴포넌트 */}
        <SocialButton
          bgColor="#FEE500"
          color="#351D1D"
          loginText="카카오 로그인"
          platformIcon={<Icon src={kakaoLogo} alt="kakao_logo" />}
          // onClick={handleKakaoLogin}
        />
      </Container>

      <HorizontalRole text="또는" />

      <Container gap={16} isForm={true} onSubmit={handleLogin}>
        {loginInputType.map((type, id) => (
          <TextInput
            key={id}
            direction={type.direction}
            type={type.type}
            labelText={type.labelText}
            filedId={type.filedId}
            name={type.filedId}
            placeholder={type.placeholder}
            errorMessage={loginErrors[type.filedId]}
            value={formValues[type.filedId]}
            onChange={handleChange}
          />
        ))}

        <Button bgColor="#141414" color="#fff" text="로그인" />

        <AuthActions />
      </Container>
    </>
  );
}

export default LoginPage;
