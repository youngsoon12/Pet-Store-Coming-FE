import axios from 'axios';

export class LoginAPI {
  #REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  #APP_REDIRECT_URL = import.meta.env.VITE_APP_REDIRECT_URL;

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
