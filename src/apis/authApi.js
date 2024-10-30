import axios from 'axios';
import { getCookie } from '@util/configCookie';

export class AuthAPI {
  async logout() {
    // POST /auth/logout API
    try {
      await axios.post(
        'http://localhost:8080/auth/logout',
        {},
        {
          headers: {
            Authorization: getCookie('token') || '',
          },
        }
      );

      // 로그아웃 성공 응답 처리
      return { success: true };
    } catch (error) {
      // 서버에서 반환한 오류 응답 처리
      if (error.response && error.response.data) {
        return {
          success: false,
          message: error.response.data.message,
          errorCode: error.response.data.errorCode,
        };
      }

      // 네트워크 오류 또는 알 수 없는 오류 처리
      return {
        success: false,
        message: 'Logout failed due to network or server issues.',
        errorCode: 'NETWORK_ERROR',
      };
    }
  }
}
