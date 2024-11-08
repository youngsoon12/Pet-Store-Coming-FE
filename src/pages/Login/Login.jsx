/** @jsxImportSource @emotion/react */
import { styles } from './Login.style.js';

import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import { LoginAPI } from '@apis/LoginPage/LoginAPI.js';

// Social Login Btn 관련 import
import SocialButton from '@/components/Login/ui/forms/button/social';
import Icon from '@/components/Login/ui/icon';
import kakaoLogo from '@assets/images/Login/logo/kakao.svg';

// Custom 수평선 컴포넌트 import
import HorizontalRole from '@components/Login/ui/horizontal_rule';

// 로그인 인풋 관련 import
import TextInput from '@components/Global/Input/Input.jsx';
import { loginInputType } from '@components/Login/data/login';

import Container from '@components/Login/container';
import Button from '@components/Login/ui/forms/button/nomal';
import AuthActions from '@components/Login/layout/auth_actions';

// Custom Hook
import useLoginForm from '@hooks/auth/useLoginForm';
import useLoginValidation from '@hooks/auth/useLoginValidation';

import { useSetRecoilState } from 'recoil';
import { isActhenticatedState } from '@recoil/atom/authState.js';
import Modal from '../../components/Global/Modal/Modal.jsx';
import FindEmailModal from '../../components/Login/container/Modal/FindEmailModal/FindEmailModal.jsx';
import FindPasswordModal from '../../components/Login/container/Modal/FindPasswordModal/FindPasswordModal.jsx';

function LoginPage() {
  const apiClass = useMemo(() => new LoginAPI(), []);
  const navigate = useNavigate();

  const setIsAuthenticated = useSetRecoilState(isActhenticatedState);

  const [actionEmailBtn, setActionEmailBtn] = useState(false);
  const [actionPasswordBtn, setActionPasswordBtn] = useState(false);

  // Custom Hook
  const { formValues, handleChange } = useLoginForm();
  const { loginErrors, validateLogin, updateLoginErrors } =
    useLoginValidation();

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
        console.log('팝업 창이 닫혔습니다.');
      }
    }, 1000);
  };

  // Login Button Form Action
  const handleLogin = async (event) => {
    event.preventDefault();

    const [email, password] = [
      formValues.login_email,
      formValues.login_password,
    ];

    // 유효성 검사를 통과 했을 경우
    if (validateLogin(email, password)) {
      // 이메일과 비밀번호를 서버로 전달
      if (await apiClass.fetchLogin(email, password, updateLoginErrors)) {
        setIsAuthenticated(true);
        navigate('/');
      }
    }
  };

  // 소셜 로그인 인증 코드 받은 후 로그인 처리 (해당 정보로 회원가입 한 정보가 없을 시 회원가입 페이지로 이동)f
  useEffect(() => {
    console.log(`${import.meta.VITE_ORIGIN_URL}`);


    const handleMessage = async (event) => {
      if (event.origin !== `${import.meta.VITE_ORIGIN_URL}`) {
        return;
      }

      console.log('sdf');

      if (event.data.type === 'KAKAO_AUTH_CODE') {
        const authCode = event.data.code;

        console.log(authCode);

        try {
          const accessToken = await apiClass.fetchKakaoToken(authCode);
          const isSuccess = await apiClass.fetchSocialLogin(accessToken);
          if (!isSuccess) {
            navigate('/login');
          } else {
            navigate('/');
          }
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
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container>
        <div css={styles.paragraphBox()}>
          <h2 css={styles.text(18, 600)}>로그인</h2>
          <p css={styles.text()}>
            <strong>꼬밍</strong>과 함께 반려견 용품 쇼핑생활을 즐겨보세요!
          </p>
        </div>

        {/* 소셜 로그인 컴포넌트 */}
        <SocialButton
          bgColor="#FEE500"
          color="#351D1D"
          loginText="카카오 로그인"
          platformIcon={<Icon src={kakaoLogo} alt="kakao_logo" />}
          onClick={handleKakaoLogin}
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

        <Button bgColor="#171717" color="#fff" text="로그인" />

        <AuthActions
          actionEmailBtnClick={() => setActionEmailBtn(true)}
          actionPasswordBtnClick={() => setActionPasswordBtn(true)}
        />
      </Container>

      {actionEmailBtn && (
        <Modal
          setState={setActionEmailBtn}
          title="이메일 찾기"
          content={<FindEmailModal />}
        />
      )}
      {actionPasswordBtn && (
        <Modal
          setState={setActionPasswordBtn}
          title="비밀번호 찾기"
          content={<FindPasswordModal setState={setActionPasswordBtn} />}
        />
      )}
    </div>
  );
}

export default LoginPage;
