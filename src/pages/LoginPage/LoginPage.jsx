import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/login/ui/forms/button/social';
import { socialLoginType } from '@/components/login/data/social';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  console.log(socialLoginType);

  return (
    <>
      {socialLoginType.map((type) => (
        <SocialButton
          bgColor={type.bgColor}
          color={type.color}
          border={type.border}
          loginText={type.loginText}
          platformIcon={type.platformIcon}
        />
      ))}
    </>
  );
}

export default LoginPage;
