import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/login/ui/forms/button/social';
import { socialLoginType } from '@/components/login/data/social';
import HorizontalRole from '../../components/login/ui/horizontal_rule';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  return (
    <>
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

      <HorizontalRole />
    </>
  );
}

export default LoginPage;
