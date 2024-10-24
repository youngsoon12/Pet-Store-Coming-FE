import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/login/ui/forms/button/social';
import { socialLoginType } from '@/components/login/data/social';
import HorizontalRole from '../../components/login/ui/horizontal_rule';
import TextInput from '../../components/login/ui/forms/input/text';

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

      <HorizontalRole text="또는" />

      <TextInput
        direction="v"
        type="text"
        labelText="이메일"
        filedId="login_email"
        name="login_email"
        placeholder="이메일을 입력해주세요"
      />

      <TextInput
        direction="v"
        type="password"
        labelText="비밀번호"
        filedId="login_password"
        name="login_password"
        placeholder="비밀번호를 입력해주세요"
      />

      {/* <TextInput
        direction="h"
        type="text"
        labelText="아이디"
        filedId="login_id"
        name="login_id"
      /> */}
    </>
  );
}

export default LoginPage;
