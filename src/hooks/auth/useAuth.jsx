import { useRecoilState } from 'recoil';
import { isActhenticatedState } from '@recoil/atom/authState';
import { useNavigate } from 'react-router-dom';
import { AuthAPI } from '@apis/authApi';
import { useCallback } from 'react';

import useErrorModal from '@hooks/modal/useErrorModal';

export default function useAuth() {
  // 사용자 로그인 상태 여부 가져오기
  const [isActhenticated, setIsActhenticated] =
    useRecoilState(isActhenticatedState);

  const navigate = useNavigate();
  const authApi = new AuthAPI();

  const { showErrorModal } = useErrorModal();

  // 로그아웃 핸들러
  const handleLogout = useCallback(async () => {
    const response = await authApi.logout();

    console.log(response);

    // 1. 로그아웃 성공 처리
    if (response.success) {
      setIsActhenticated(false); // 로그인 인증 상태 false로 설정

      // 쿠키 만료 시간 가져오기
      const expirationTime = getCookie('tokenExpirationTime');

      // 로그인 정보 삭제
      localStorage.removeItem('deviceId', expirationTime);

      // Cookie에 저장된 로그인과 관련된 정보 모두 삭제
      removeCookie('token', {
        path: '/',
        sameSite: 'Lax',
        // secure: true, 배포 시 무조건 주석 풀기
        maxAge: Math.floor(expirationTime / 1000), // 토큰 만료 시간 설정
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
        maxAge: Math.floor(expirationTime / 1000), // 토큰 만료 시간 설정
      });

      navigate('/'); // 로그아웃 후 리다이렉션
    }

    // 2. 로그아웃 실패 처리
    else {
      // 이미 로그아웃된 상태
      if (response.errorCode === 'TOKEN_ALREADY_INVALIDATED') {
        showErrorModal('이미 로그아웃된 상태입니다.');
      }

      // 유효하지 않은 토큰
      else if (response.errorCode === 'INVALID_TOKEN') {
        showErrorModal('유효하지 않은 토큰입니다. 다시 로그인해주세요.');
      }

      // 네트워크 등의 문제
      else {
        showErrorModal('알 수 없는 오류가 발생했습니다.');
      }
    }
  }, []);

  return { isActhenticated, handleLogout };
}
