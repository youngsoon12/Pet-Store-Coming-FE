/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { styles } from '../FindModal.style';

import axios from 'axios';

function FindPasswordModal({ setState }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [newPassword, setNewPassword] = useState('');
  const [newConfirmPassword, setNewConfirmPassword] = useState('');

  const [resetPassword, setResetPassword] = useState(false);

  const [result, setReesult] = useState({
    text: '',
    error: false,
  });

  // 비밀번호를 수정하기 위한 이메일 체크 submit 핸들러
  const handleEmailCheckSubmit = async (event) => {
    event.preventDefault();

    if (email && name && phoneNumber) {
      try {
        await axios
          .get(
            `${import.meta.env.VITE_API_URL}/user/recover-credentials/email?email=${email}&name=${name}&phone_number=${phoneNumber}`
          )
          .then((res) => res.data);

        setResetPassword(true);
      } catch (error) {
        if (error.response) {
          const err = error.response?.data;

          switch (err.errorCode) {
            case 'USER_NOT_FOUND':
              setReesult({
                text: '입력하신 정보로 가입하신 정보가 없습니다.',
                error: true,
              });
              break;
            case 'SOCIAL_LOGIN_USER':
              setReesult({
                text: '사용자님은 카카오 소셜 서비스로 로그인하셨습니다.',
                error: true,
              });
              break;
          }
        }
      }
    }
  };

  // 비밀번호 수정 submit 핸들러
  const handleChangePasswordSubmit = async (event) => {
    event.preventDefault();

    if (
      newPassword &&
      newConfirmPassword &&
      newPassword === newConfirmPassword
    ) {
      try {
        const data = {
          email,
          name,
          phoneNumber,
          newPassword,
        };

        await axios.put(
          `${import.meta.env.VITE_API_URL}/user/recover-credentials/reset-password`,
          data
        );

        setReesult({
          text: '비밀번호가 성공적으로 수정되었습니다!!',
          error: false,
        });

        setTimeout(() => {
          setState(false);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form css={styles.flexContainer()}>
      <div css={styles.sliderContainer()}>
        <div css={styles.slider(resetPassword)}>
          {/* 슬라이드 좌측 */}
          <div css={styles.slider_left()}>
            {/* 이메일 입력 폼 */}
            <div css={styles.inputContainer()}>
              <label>이메일</label>
              <input
                type="text"
                placeholder="사용자님이 가입 시 입력하신 이메일을 작성해주세요"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            {/* 이름 입력 폼 */}
            <div css={styles.inputContainer()}>
              <label>이름</label>
              <input
                type="text"
                placeholder="사용자님이 가입 시 입력하신 이름을 작성해주세요"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            {/* 핸드폰 번호 입력 폼 */}
            <div css={styles.inputContainer()}>
              <label>핸드폰 번호</label>
              <input
                type="text"
                placeholder="사용자님이 가입 시 입력하신 핸드폰 번호를 작성해주세요"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>

            <button css={styles.submitBtn()} onClick={handleEmailCheckSubmit}>
              비밀번호 찾기
            </button>

            {result && (
              <p css={styles.resultText(result.error)}>{result.text}</p>
            )}
          </div>

          {/* 슬라이드 우측 */}
          <div css={styles.slider_right()}>
            {/* 새 비밀번호 입력 폼 */}
            <div css={styles.inputContainer()}>
              <label>새 비밀번호</label>
              <input
                type="password"
                placeholder="사용자님의 새로운 비밀번호를 입력해주세요."
                value={newPassword}
                onChange={(event) => setNewPassword(event.target.value)}
              />
            </div>

            {/* 새 비밀번호 확인 입력 폼 */}
            <div css={styles.inputContainer()}>
              <label>새 비밀번호 확인</label>
              <input
                type="password"
                placeholder="사용자님의 새로운 비밀번호를 한번 더 입력해주세요."
                value={newConfirmPassword}
                onChange={(event) => {
                  setNewConfirmPassword(event.target.value);

                  if (event.target.value !== newPassword) {
                    setReesult({
                      text: '비밀번호가 일치하지 않습니다.',
                      error: true,
                    });
                  } else {
                    setReesult({
                      text: '',
                      error: false,
                    });
                  }
                }}
              />
            </div>

            <button
              css={styles.submitBtn()}
              onClick={handleChangePasswordSubmit}
            >
              비밀번호 재설정
            </button>

            {result && (
              <p css={styles.resultText(result.error)}>{result.text}</p>
            )}
          </div>
        </div>
      </div>
    </form>
  );
}

export default FindPasswordModal;
