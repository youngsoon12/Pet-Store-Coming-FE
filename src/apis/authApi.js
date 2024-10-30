import axios from 'axios';
import { getCookie } from '@util/configCookie';

export class AuthAPI {
  async logout() {
    try {
      const res = await axios.post(
        'http://localhost:8080/auth/logout',
        {},
        {
          headers: {
            Authorization: getCookie('token'),
          },
        }
      );

      return true;
    } catch (error) {}
  }
}
