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
        img={
          new URL(
            '@assets/images/login/kakao_login_medium_narrow.png',
            import.meta.url
          ).href
        }
      />
    </>
  );
}

export default LoginPage;
