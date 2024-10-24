import { useState } from 'react';

function useLoginValidation() {
  const [loginError, setLoginError] = useState('');

  // 입력값 유효성 검증 핸들러
  const validateLogin = (email, password) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규 표현식

    // 이메일 유효성 검사
    if (!email) {
      setLoginError('이메일을 입력해주세요.');
      return false;
    } else if (!emailPattern.test(email)) {
      setLoginError('유효한 이메일을 입력해주세요.');
      return false;
    }

    // 비밀번호 유효성 검사
    if (!password.length) {
      setLoginError('비밀번호를 입력해주세요.');
      return false;
    } else if (!password.length < 6) {
      setLoginError('비밀번호를 입력해주세요.');
      return false;
    }
  };

  return {
    loginError,
    validateLogin,
  };
}

export default useLoginValidation;
