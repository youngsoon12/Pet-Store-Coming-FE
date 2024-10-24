import React, { useMemo } from 'react';
import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButtn from '../../components/login/ui/forms/button/social';
import Icon from '../../components/login/ui/icon';

import kakaoLogo from '@assets/images/login/logo/kakao.svg';
import naverLogo from '@assets/images/login/logo/naver.svg';
import googleLogo from '@assets/images/login/logo/google.svg';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);

  return (
    <>
      <SocialButtn
        bgColor={'#FEE500'}
        color="#351D1D"
        loginText="카카오 로그인"
        platformIcon={<Icon src={kakaoLogo} alt="kakao_logo" />}
      />

      {/* <SocialButton
        bgColor={'#FEE500'}
        color="#351D1D"
        loginText="카카오 로그인"
        platformIcon={<Icon src={kakaoLogo} alt="kakao_logo" />}
        // font-family -> Apple SD Gothic Neo(애플 기기), Noto Sans CJK(안드로이드 및 웹)
        // font-weight -> 400 ~ 500
      />

      <SocialButton
        bgColor={'#03C75A'}
        color="#fff"
        loginText="네이버 로그인"
        platformIcon={<Icon src={naverLogo} alt="naver_logo" />}
        // font-family -> Noto Sans CJK
        // font-weight -> 600 ~ 700
      />

      <SocialButton
        bgColor={'#ffff'}
        color="#585857"
        border={'0.5px solid rgba(0, 0, 0, 0.2)'}
        loginText="구글 로그인"
        platformIcon={<Icon src={googleLogo} alt="google_logo" />}
        // font-family -> Roboto-Medium.ttf
        // font-weight -> 500
      /> */}
    </>
  );
}

export default LoginPage;
