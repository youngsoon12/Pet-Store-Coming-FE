/** @jsxImportSource @emotion/react */
import AddressInput from '../../components/global/AddressInput/AddressInput';
import { styles } from './EditMyInfo.style';

export default function EditMyInfo() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div css={styles.pageContainer()}>
        <form css={styles.formContainer()} onSubmit={handleSubmit}>
          <div css={styles.formInputContainer()}>
            <label>회원구분</label>

            <div>개인회원</div>
          </div>

          <div css={styles.formInputContainer()}>
            <label>아이디</label>
            coming
          </div>

          <div css={styles.formInputContainer()}>
            <label>이름</label>
            원정투수
          </div>

          <div css={styles.formInputContainer()}>
            <label>주소</label>
            {/* <input type="text" /> */}
            <AddressInput containerWidth={'70%'} />
          </div>

          <div css={styles.formInputContainer()}>
            <label>휴대전화</label>
            <input type="text" />
          </div>

          <button>수정완료</button>
        </form>
      </div>
    </>
  );
}
