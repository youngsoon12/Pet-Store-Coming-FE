import { useState } from 'react';

/**
 * @description: Login Page에서 입력하는 입력폼 Custom Hook
 * @returns: state 변수와 onChange 이벤트를 반환
 */
export default function useLoginForm() {
  // input 태그의 state 변수 선언
  const [formValues, setFormValues] = useState({
    login_email: '',
    login_password: '',
  }); // 상태 변수 선언

  // input 태그의 onChange 이벤트 함수 정의
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return {
    formValues,
    handleChange,
  };
}
