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

import ColumnContainer from '@components/login/\bcontainer';
import Button from '@components/login/ui/forms/button/nomal';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

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
          />
        ))}

        <Button bgColor="#141414" color="#fff" text="로그인" />
      </ColumnContainer>
    </>
  );
}

export default LoginPage;
