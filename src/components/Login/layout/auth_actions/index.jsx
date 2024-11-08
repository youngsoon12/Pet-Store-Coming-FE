/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
import styles from './auth_actions.style.js';

function AuthActions({ actionEmailBtnClick, actionPasswordBtnClick }) {
  const navigate = useNavigate();

  return (
    <div css={styles.authOptions()}>
      <div css={styles.authLinks()}>
        <span onClick={actionEmailBtnClick} css="findId">
          이메일 찾기
        </span>
        <span onClick={actionPasswordBtnClick} css="findPassword">
          비밀번호 찾기
        </span>
      </div>
      <div css="signupLink" onClick={() => navigate('/sign-up')}>
        <span css="signup">회원가입</span>
      </div>
    </div>
  );
}

export default AuthActions;
