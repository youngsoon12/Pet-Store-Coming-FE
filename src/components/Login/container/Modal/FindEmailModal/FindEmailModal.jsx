/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { styles } from '../FindModal.style';
import axios from 'axios';

function FindEmailModal() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [result, setReesult] = useState({
    text: '',
    error: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name && phoneNumber) {
      try {
        const response = await axios
          .get(
            `${import.meta.env.VITE_API_URL}/user/recover-credentials/email?name=${name}&phone_number=${phoneNumber}`
          )
          .then((res) => res.data);

        setReesult({
          text: `사용자님의 이메일 정보: ${response.data.email}`,
          error: false,
        });
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

  return (
    <form onSubmit={handleSubmit} css={styles.flexContainer()}>
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

      <button css={styles.submitBtn()}>이메일 찾기</button>

      {result && <p css={styles.resultText(result.error)}>{result.text}</p>}
    </form>
  );
}

export default FindEmailModal;
