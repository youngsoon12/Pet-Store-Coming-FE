import axios from 'axios';

export class LoginAPI {
  #REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  #APP_REDIRECT_URL = import.meta.env.VITE_APP_REDIRECT_URL;

  // 인가 코드를 통해서
  async fetchAccessToken(code) {
    try {
      return await axios.post(
        'http://localhost:8080/auth/social/kakao',
        { code },
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      console.log('Error fetching access token:', error);
      throw error;
    }
  }

  async fetchUserInfo(accessToken) {
    try {
      const res = await axios.get(
        'http://localhost:8080/user/social/userInfo',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(res);
    } catch (error) {
      console.log('Error fetching access token:', error);
      throw error;
    }
  }

  get KAKAO_AUTH_URL() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.#REST_API_KEY}&redirect_uri=${this.#APP_REDIRECT_URL}&response_type=code`;
  }
}
