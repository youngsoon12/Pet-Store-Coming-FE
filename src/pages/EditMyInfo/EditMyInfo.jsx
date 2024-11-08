/** @jsxImportSource @emotion/react */
import { useState } from 'react';

// import AddressInput from '@components/Global/AddressInput/AddressInput';

import { isActhenticatedState } from '@recoil/atom/authState';
import { useRecoilState } from 'recoil';

import { styles } from './EditMyInfo.style';

import { decodeToken, getCookie, removeCookie } from '@util/configCookie';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditMyInfo() {
  const token = getCookie('token');
  const userInfo = decodeToken(token);

  const [isActhenticated, setIsActhenticated] =
    useRecoilState(isActhenticatedState);

  const navigate = useNavigate();

  const [updateUserInfo, setUpdateUserInfo] = useState({
    id: userInfo.userId,
    role: userInfo.role,
    address: '',
    phoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdateUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      role: UpdateRole,
      address: UpdateAddress,
      phoneNumber: UpdatePhoneNumber,
    } = updateUserInfo;

    console.log('Hello');

    if (UpdateAddress !== '' || UpdatePhoneNumber !== '') {
      console.log('Fuck');

      try {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/user/update/info`,
          updateUserInfo
        );

        await axios.post(
          `${import.meta.env.VITE_API_URL}/auth/logout`,
          {},
          {
            headers: {
              Authorization: getCookie('token'),
            },
          }
        );

        // 로그인 정보 삭제
        localStorage.removeItem('deviceId');
        setIsActhenticated(false); // 로그인 인증 상태 false로 설정

        // Cookie에 저장된 로그인과 관련된 정보 모두 삭제
        removeCookie('token', {
          path: '/',
          sameSite: 'Lax',
          // secure: true, 배포 시 무조건 주석 풀기
          maxAge: Math.floor(getCookie('tokenExpirationTime') / 1000), // 토큰 만료 시간 설정
        });

        removeCookie('refreshToken', {
          path: '/',
          sameSite: 'Lax',
          // secure: true, 배포 시 무조건 주석 풀기
          maxAge: 7 * 24 * 60 * 60, // (초 단위) 7일 만료 시간
        });

        removeCookie('tokenExpirationTime', {
          path: '/',
          sameSite: 'Lax',
          // secure: true, 배포 시 무조건 주석 풀기
          maxAge: Math.floor(getCookie('tokenExpirationTime') / 1000), // 토큰 만료 시간 설정
        });

        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
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
                  value="USER"
                  checked={updateUserInfo.role === 'USER'}
                  onChange={handleChange}
                />
                일반 회원
              </label>

              <label>
                <input
                  type="radio"
                  name="role"
                  value="PROVIDER"
                  checked={updateUserInfo.role === 'PROVIDER'}
                  onChange={handleChange}
                />
                판매자 회원
              </label>
            </div>
          </div>

          <div css={styles.formInputContainer()}>
            <label>이메일</label>
            {userInfo.email}
          </div>

          <div css={styles.formInputContainer()}>
            <label>이름</label>
            {userInfo.name}
          </div>

          <div css={styles.formInputContainer()}>
            <label>주소</label>
            {/* <input type="text" /> */}
            <input
              type="text"
              name="address"
              value={updateUserInfo.address}
              onChange={handleChange}
              placeholder={userInfo.address}
            />
            {/* <AddressInput
              containerWidth={'80%'}
              handleChange={handleAddressChange}
            /> */}
          </div>

          <div css={styles.formInputContainer()}>
            <label>휴대전화</label>
            <input
              type="text"
              name="phoneNumber"
              value={updateUserInfo.phoneNumber}
              onChange={handleChange}
              placeholder={userInfo.phoneNumber}
            />
          </div>

          <button>수정완료</button>
        </form>
      </div>
    </>
  );
}
