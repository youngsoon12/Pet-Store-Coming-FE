/** @jsxImportSource @emotion/react */

import ContentsWrapper from '../../components/global/ContentsWrapper/ContentsWrapper';
import Header from '../../components/global/Header/Header';
import { styles } from './sign_up_page.style';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ContentsWrapper>
        <div css={styles.pageContainer()}>
          <h2 css={styles.headerTitle()}>회원가입</h2>

          <form css={styles.formContainer()} onSubmit={handleSubmit}>
            <div css={styles.formInputContainer()}>
              <label>회원구분</label>

              <div>
                <label>
                  <input type="radio" />
                  개인회원
                </label>

                <label>
                  <input type="radio" />
                  판매자 회원
                </label>
              </div>
            </div>

            <div css={styles.formInputContainer()}>
              <label>아이디</label>
              <input type="text" />
            </div>

            <div css={styles.formInputContainer()}>
              <label>비밀번호</label>
              <input type="password" />
            </div>

            <div css={styles.formInputContainer()}>
              <label>비밀번호 확인</label>
              <input type="password" />
            </div>

            <div css={styles.formInputContainer()}>
              <label>이름</label>
              <input type="text" />
            </div>

            <div css={styles.formInputContainer()}>
              <label>주소</label>
              <input type="text" />
            </div>

            <div css={styles.formInputContainer()}>
              <label>휴대전화</label>
              <input type="text" />
            </div>

            <button>회원가입</button>
          </form>
        </div>
      </ContentsWrapper>
    </>
  );
}

export default SignUp;
