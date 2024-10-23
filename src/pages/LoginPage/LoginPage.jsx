import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';
import { SocialButtonComponent as SocialButton } from '@components/login/ui/SocialButton.jsx';

// Login Page에 필요한 Component import
// import { SocialButtonComponent as SocialButton } from

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  return (
    <>
      <SocialButton
        bgColor={'#FEE500'}
        color="#351D1D"
        loginText="카카오 로그인"
      />

      <SocialButton
        bgColor={'#03C75A'}
        color="#fff"
        loginText="네이버 로그인"
      />

      <SocialButton
        bgColor={'#ffff'}
        color="#585857"
        border={'0.5px solid rgba(0, 0, 0, 0.2)'}
        loginText="구글 로그인"
      />
    </>
  );
}

export default LoginPage;
