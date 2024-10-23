export class LoginAPI {
  #REST_API_KEY = import.meta.env.VITE_REST_API_KEY;
  #VITE_APP_REDIRECT_URL = import.meta.env.VITE_VITE_APP_REDIRECT_URL;

  get KAKAO_AUTH_URL() {
    return `https://kauth.kakao.com/oauth/authorize?client_id=${this.#REST_API_KEY}&redirect_uri=${this.#VITE_APP_REDIRECT_URL}&response_type=code`;
  }
}
