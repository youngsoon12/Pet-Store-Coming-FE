import axios from 'axios';

export class LoginAPI {
  #REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  #APP_REDIRECT_URL = import.meta.env.VITE_APP_REDIRECT_URL;

  async fetchAccessToken(code) {
    await axios
      .post(
        'http://localhost:8080/auth/social/kakao',
        { code },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => console.log(res.data));
  }

  get KAKAO_AUTH_URL() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.#REST_API_KEY}&redirect_uri=${this.#APP_REDIRECT_URL}&response_type=code`;
  }
}
