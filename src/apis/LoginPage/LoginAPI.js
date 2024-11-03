import axios from 'axios';

import { setCookie } from '@util/configCookie';

// device ID 설정 및 유지
function getOrCreateDeviceId() {
  let deviceId = localStorage.getItem('deviceId'); // 디바이스 정보 가져오기

  // 디바이스 정보가 없을 경우 새로운 UUID 값 생성 이후 localStorage에 저장
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem('deviceId', deviceId);
  }

  return deviceId;
}

export class LoginAPI {
  #REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  #APP_REDIRECT_URL = import.meta.env.VITE_APP_REDIRECT_URL;

  // 로그인 시도 API
  async fetchLogin(email, password, setErrorMsg, setIsAuthenticated) {
    const deviceId = getOrCreateDeviceId(); // 디바이스 아이디 생성 및 가져오기

    try {
      const res = await axios
        .get(
          `http://localhost:8080/auth/sign-in?email=${email}&password=${password}&deviceId=${deviceId}`
        )
        .then((res) => res.data);

      // 예외가 발생하지 않은 경우 - Cookie 생성

      // 사용자 인증을 위한 토큰을 쿠키값에 설정
      setCookie('token', res.token, {
        path: '/',
        sameSite: 'Lax',
        // secure: true, 배포 시 무조건 주석 풀기
        maxAge: Math.floor(res.expirationTime / 1000), // 토큰 만료 시간 설정
      });

      // 사용자 만료 시간을 늘리기 위한 리프레시 토큰을 쿠키값에 설정
      setCookie('refreshToken', res.refreshToken, {
        path: '/',
        sameSite: 'Lax',
        // secure: true, 배포 시 무조건 주석 풀기
        maxAge: 7 * 24 * 60 * 60, // (초 단위) 7일 만료 시간
      });

      // 사용자의 토큰 남은 시간을 확인하기 위한 토큰 만료 시간을 쿠키값에 설정
      setCookie('tokenExpirationTime', res.expirationTime, {
        path: '/',
        sameSite: 'Lax',
        // secure: true, 배포 시 무조건 주석 풀기
        maxAge: Math.floor(res.expirationTime / 1000), // 토큰 만료 시간 설정
      });

      return true;
    } catch (error) {
      // 서버에서 에러에 대한 response를 넘겨 받았을 경우
      if (error.response) {
        const err = error.response.data;

        switch (err.errorCode) {
          case 'USER_NOT_FOUND':
            setErrorMsg('login_email', '존재하지 않는 아이디 입니다.');
            break;
          case 'INVALID_PASSWORD':
            setErrorMsg('login_password', '비밀번호가 일치하지 않습니다.');
            break;
        }
      }
    }

    // 넘겨 받지 못한 경우 error.code 속성을 통해서 에러 페이지 이동
  }

  // 카카오 인가 코드 발급
  async fetchAccessToken(code) {
    try {
      const resposne = await axios
        .get(`http://localhost:8080/auth/social/kakao?code=${code}`)
        .then((res) => console.log(res));

      // const res = await axios.get("http://localhost:8080/auth/social/kakao", code)

      // const res = await axios
      //   .post('http://localhost:8080/auth/social/kakao', code, {
      //     headers: { 'Content-Type': 'application/json' },
      //   })
      //   .then((res) => res.data);

      // return res.accessToken;
    } catch (error) {
      console.log('Error fetching access token:', error);
      throw error;
    }
  }

  // 카카오 인가 코드를 통해서 카카오 사용자 정보 불러오기
  async fetchUserInfo(data) {
    try {
      const res = await axios.get(
        'http://localhost:8080/auth/social/userInfo',
        {
          headers: {
            Authorization: `Bearer ${data['access_token']}`,
          },
        }
      );

      console.log('UserInfo:', res.data);
    } catch (error) {}
  }

  get KAKAO_AUTH_URL() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.#REST_API_KEY}&redirect_uri=${this.#APP_REDIRECT_URL}&response_type=code&scope=profile,nickname,email,phone_number`;
  }
}
