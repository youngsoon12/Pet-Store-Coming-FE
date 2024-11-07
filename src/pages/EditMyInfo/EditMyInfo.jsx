/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import AddressInput from '../../components/global/AddressInput/AddressInput';
import { styles } from './EditMyInfo.style';

export default function EditMyInfo() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [role, setRole] = useState('user');
  const handleChange = (event) => {
    // const { name, value } = event.target;
    // setSignUpFormValues((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
    // validateField(name, value);
    setRole(event.target.value);
  };

  return (
    <>
      <div css={styles.pageContainer()}>
        <form css={styles.formContainer()} onSubmit={handleSubmit}>
          <div css={styles.formInputContainer()}>
            <label>회원구분</label>

            <div className="inputRadioField">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === 'user'}
                  onChange={handleChange}
                />
                일반 회원
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="provider"
                  checked={role === 'provider'}
                  onChange={handleChange}
                />
                판매자 회원
              </label>
            </div>
          </div>

          <div css={styles.formInputContainer()}>
            <label>이메일</label>
            coming
          </div>

          <div css={styles.formInputContainer()}>
            <label>이름</label>
            원정투수
          </div>

          <div css={styles.formInputContainer()}>
            <label>주소</label>
            {/* <input type="text" /> */}
            <AddressInput containerWidth={'80%'} />
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
