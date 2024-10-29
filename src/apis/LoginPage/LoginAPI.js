import axios from 'axios';

// device ID 설정 및 유지
function getOrCreateDeviceId() {
  let deviceId = localStorage.getItem('deviceId');

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
  async fetchLogin(email, password, setErrorMsg) {
    const deviceId = getOrCreateDeviceId(); // 디바이스 아이디 생성 및 가져오기

    try {
      const res = await axios
        .get(
          `http://localhost:8080/auth/sign-in?email=${email}&password=${password}&deviceId=${deviceId}`
        )
        .then((res) => res.data);

      return { state: true, data: res };
    } catch (error) {
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

  // 카카오 인가 코드 발급
  async fetchAccessToken(code) {
    try {
      const res = await axios
        .post(
          'http://localhost:8080/auth/social/kakao',
          { code },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then((res) => res.data);

      return res.accessToken;
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
