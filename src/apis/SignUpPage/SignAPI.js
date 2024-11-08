import axios from 'axios';

export class SignUpAPI {
  #BASE_URL = import.meta.env.VITE_API_URL;

  async fetchSignUp(data, setErros) {
    try {
      await axios.post(`${this.#BASE_URL}/auth/sign-up`, data);
      return true;
    } catch (error) {
      if (error.response) {
        const err = error.response.data;

        switch (err.errorCode) {
          case 'DUPLICATE_EMAIL':
            setErros((prev) => ({
              ...prev,
              email: '중복된 이메일이 존재합니다.',
            }));
        }
      }
      return false;
    }
  }
}
