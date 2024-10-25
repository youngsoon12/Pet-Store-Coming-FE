import { useEffect, useMemo, useState } from 'react';
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
import AuthActions from '../../components/login/layout/auth_actions';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);
  const [popup, setPopup] = useState(null);

  // Custom Hook
  const { formValues, handleChange } = useLoginForm();

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
    setPopup(newPopup);

    const popupTick = setInterval(() => {
      if (newPopup.closed) {
        clearInterval(popupTick);
        console.log('팝업이 닫힘');
        return;
      }
    }, 500);
  };

  // Login Button Form Action
  const handleLogin = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin === 'http://localhost:5173') {
        const { code } = event.data;

        console.log(popup);

        if (popup) {
          popup.close();
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [popup]);

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
            onClick={handleKakaoLogin}
          />
        ))}
      </ColumnContainer>

      <HorizontalRole text="또는" />

      <ColumnContainer isForm={true} onSubmit={handleLogin}>
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

        <AuthActions />
      </ColumnContainer>
    </>
  );
}

export default LoginPage;
