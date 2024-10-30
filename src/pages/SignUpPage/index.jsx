import React from 'react';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>회원가입</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>회원구분</label>

          <label>
            <input type="radio" />
            개인회원
          </label>

          <label>
            <input type="radio" />
            판매자 회원
          </label>
        </div>

        <div>
          <label>아이디</label>
          <input type="text" />
        </div>

        <div>
          <label>비밀번호</label>
          <input type="password" />
        </div>

        <div>
          <label>비밀번호 확인</label>
          <input type="password" />
        </div>

        <div>
          <label>이름</label>
          <input type="text" />
        </div>

        <div>
          <label>주소</label>
          <input type="text" />
        </div>

        <div>
          <label>휴대전화</label>
          <input type="text" />
        </div>

        <button>회원가입</button>
      </form>
    </>
  );
}

export default SignUp;
