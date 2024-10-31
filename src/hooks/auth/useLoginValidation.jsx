import { useState } from 'react';

/**
 * @description 로그인 폼 유효성 검사 담당 커스텀 훅(Custom Hook)
 */
function useLoginValidation() {
  const [loginErrors, setLoginErrors] = useState({
    login_email: '',
    login_password: '',
  });

  // 입력값 유효성 검증 핸들러
  const validateLogin = (email, password) => {
    const errors = {}; // 에러 종류
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 정규 표현식

    // 이메일 유효성 검사
    if (!email) {
      errors.login_email = '이메일을 입력해주세요.';
    } else if (!emailPattern.test(email)) {
      errors.login_email = '유효한 이메일 형식으로 작성해주세요.';
    } else {
      delete errors.login_email;
    }

    // 비밀번호 유효성 검사
    if (!password.length) {
      errors.login_password = '비밀번호를 입력해주세요.';
    } else if (password.length < 6) {
      errors.login_password = '비밀번호는 6자 이상이어야 합니다.';
    } else {
      delete errors.login_password;
    }

    setLoginErrors(errors); // 에러의 종류들을 에러에 할당

    // erros 객체의 키 값이 없을 경우 로그인 입력값 유효성 검사 통과
    return Object.keys(errors).length === 0;
  };

  // 외부에서 에러 메시지를 업데이트하는 함수
  const updateLoginErrors = (field, message) => {
    setLoginErrors((prevErrors) => ({
      ...prevErrors,
      [field]: message,
    }));
  };

  return {
    loginErrors,
    validateLogin,
    updateLoginErrors,
  };
}

export default useLoginValidation;
