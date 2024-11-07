/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
// import ContentsWrapper from '../../components/global/ContentsWrapper/ContentsWrapper';
import { styles } from './SignUp.style';
import { useEffect, useState } from 'react';

import useSignUpForm from '@hooks/auth/useSignUpForm';
import { SignUpAPI } from '@apis/SignUpPage/SignAPI';
import Button from '@components/login/ui/forms/button/nomal';

function SignUp() {
  const navigate = useNavigate();
  const signUpAPI = new SignUpAPI();
  const [socialLogin, setSocialLogin] = useState(false);
  const {
    signUpFormValues,
    erros,
    setErros,
    initializeFormValues,
    validateAllFields,
    handleChange,
    handlePhoneNumberChange,
  } = useSignUpForm();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // 미작성 입력값 확인
    if (validateAllFields()) {
      const res = await signUpAPI.fetchSignUp(signUpFormValues, setErros);

      if (res) {
        navigate('/signup/success', { state: signUpFormValues });
      }
    }
  };

  // 회원가입 소셜 로그인 유무 판단
  useEffect(() => {
    const initId = localStorage.getItem('id');
    const initPlatfrom = new URLSearchParams(location.search).get('platform');

    if (initId && initPlatfrom) {
      initializeFormValues(initId, initPlatfrom);
      setSocialLogin(true);
      localStorage.removeItem('id');
    }
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
      <div css={styles.pageContainer()}>
        <h2 css={styles.headerTitle()}>
          {socialLogin ? '개인 정보 입력' : '회원가입'}
        </h2>

        <form css={styles.formContainer()} onSubmit={handleSubmit}>
          {/* 회원 구분 입력 폼 */}
          <div css={styles.formInputContainer()}>
            <label>회원구분</label>

            <div className="inputRadioField">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={signUpFormValues.role === 'user'}
                  onChange={handleChange}
                />
                일반 회원
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="provider"
                  checked={signUpFormValues.role === 'provider'}
                  onChange={handleChange}
                />
                판매자 회원
              </label>
            </div>
          </div>

          {/* 아이디 입력  */}
          {socialLogin ? null : (
            <div css={styles.formInputContainer(erros.email)}>
              <label>이메일</label>

              <div className="inputField">
                <input
                  type="text"
                  name="email"
                  value={signUpFormValues.email}
                  onChange={handleChange}
                  placeholder="example@example.com"
                />
                {erros.email && <p className="errorMsg">{erros.email}</p>}
              </div>
            </div>
          )}

          {/* 비밀번호 입력  */}
          {socialLogin ? null : (
            <div css={styles.formInputContainer(erros.password)}>
              <label>비밀번호</label>

              <div className="inputField">
                <input
                  type="password"
                  name="password"
                  value={signUpFormValues.password}
                  onChange={handleChange}
                  placeholder="비밀번호를 입력해주세요."
                />
                {erros.password && <p className="errorMsg">{erros.password}</p>}
              </div>
            </div>
          )}

          {/* 비밀번호 확인란  */}
          {socialLogin ? null : (
            <div css={styles.formInputContainer(erros.confimPassword)}>
              <label>비밀번호 확인</label>
              <div className="inputField">
                <input
                  type="password"
                  name="confimPassword"
                  value={signUpFormValues.confimPassword}
                  onChange={handleChange}
                  placeholder="비밀번호를 다시 입력해주세요."
                />
                {erros.confimPassword && (
                  <p className="errorMsg">{erros.confimPassword}</p>
                )}
              </div>
            </div>
          )}

          <div css={styles.formInputContainer(erros.name)}>
            <label>이름</label>
            <div className="inputField">
              <input
                type="text"
                name="name"
                value={signUpFormValues.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
              />
              {erros.name && <p className="errorMsg">{erros.name}</p>}
            </div>
          </div>

          <div css={styles.formInputContainer(erros.address)}>
            <label>주소</label>
            <div className="inputField">
              <input
                type="text"
                name="address"
                value={signUpFormValues.address}
                onChange={handleChange}
                placeholder="주소를 입력해주세요"
              />
              {erros.address && <p className="errorMsg">{erros.address}</p>}
            </div>
          </div>

          <div css={styles.formInputContainer(erros.phoneNumber)}>
            <label>휴대전화</label>
            <div className="inputField">
              <input
                type="text"
                name="phoneNumber"
                value={signUpFormValues.phoneNumber}
                onChange={handlePhoneNumberChange}
                placeholder="010-1234-5678"
              />
              {erros.phoneNumber && (
                <p className="errorMsg">{erros.phoneNumber}</p>
              )}
            </div>
          </div>

          <Button
            bgColor="#171717"
            color="#fff"
            text="회원가입"
            width="100%"
            marginTop="40px"
          ></Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
