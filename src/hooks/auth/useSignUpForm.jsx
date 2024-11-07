import { useState } from 'react';

export default function useSignUpForm() {
  const [signUpFormValues, setSignUpFormValues] = useState({
    id: crypto.randomUUID(),
    email: '',
    password: '',
    confimPassword: '',
    name: '',
    phoneNumber: '',
    address: '',
    role: 'user',
    platform: '',
  });

  const [erros, setErros] = useState({});

  // 소셜 로그인일 경우 초기값 지정
  const initializeFormValues = (id, platform) => {
    setSignUpFormValues((prev) => ({
      ...prev,
      id,
      platform,
    }));
  };

  // 일반 Text, Password 이벤트 핸들러
  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  // 핸드폰 번호 이벤트 핸들러
  const handlePhoneNumberChange = (event) => {
    const rawValue = event.target.value.replace(/[^0-9]/g, '');
    let formattedValue = rawValue;

    if (rawValue.length > 3 && rawValue.length <= 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
    } else if (rawValue.length > 7) {
      formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 7)}-${rawValue.slice(7, 11)}`;
    }

    setSignUpFormValues((prev) => ({
      ...prev,
      phoneNumber: formattedValue,
    }));

    validateField('phoneNumber', formattedValue);
  };

  // 각 input field 유효성 검사
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = '유효한 이메일 주소를 입력해주세요.';
        }
        break;

      case 'password':
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/.test(value)) {
          error =
            '비밀번호는 8자 이상, 대문자, 소문자 및 특수 문자를 포함해야 합니다.';
        }
        break;

      case 'confimPassword':
        if (value !== signUpFormValues.password) {
          error = '비밀번호가 일치하지 않습니다.';
        }
        break;

      case 'phoneNumber':
        if (!/^\d{3}-\d{4}-\d{4}$/.test(value)) {
          error = '휴대폰 번호는 010-1234-5678 형식이어야 합니다.';
        }
        break;
    }

    setErros((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // 입력값 제출 시 마지막 유효성 검사 핸들러
  const validateAllFields = () => {
    const requiredFields = [
      'email',
      'password',
      'confimPassword',
      'name',
      'phoneNumber',
      'address',
    ];
    const newErrors = { ...erros };

    requiredFields.forEach((field) => {
      if (!signUpFormValues[field]) {
        newErrors[field] = '해당 입력란은 반드시 입력해야 됩니다.';
      } else {
        validateField(field, signUpFormValues[field]);
      }
    });

    setErros(newErrors);
    return Object.values(erros).every((error) => error === '');
  };

  return {
    signUpFormValues,
    erros,
    setErros,
    initializeFormValues,
    handleChange,
    handlePhoneNumberChange,
    validateAllFields,
  };
}
