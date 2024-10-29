/** @jsxImportSource @emotion/react */

import styles from './authActions.stlye.js';

function AuthActions() {
  return (
    <div css={styles.authOptions()}>
      <div css={styles.authLinks()}>
        <span css="findId">아이디 찾기</span>
        <span css="findPassword">비밀번호 찾기</span>
      </div>
      <div css="signupLink">
        <span css="signup">회원가입</span>
      </div>
    </div>
  );
}

export default AuthActions;
