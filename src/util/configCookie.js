import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const cookiesOptions = (type) => {
  if (['token', 'tokenExpirationTime'].includes(type)) {
    return {
      path: '/',
      sameSite: 'Lax',
      // secure: true, 배포 시 무조건 주석 풀기
      maxAge: Math.floor(res.expirationTime / 1000), // 토큰 만료 시간 설정
    };
  } else if (type === 'refreshToken') {
    return {
      path: '/',
      sameSite: 'Lax',
      // secure: true, 배포 시 무조건 주석 풀기
      maxAge: 7 * 24 * 60 * 60, // (초 단위) 7일 만료 시간
    };
  }
};

// 쿠키 설정
export const setCookie = (key, value, option) => {
  cookies.set(key, value, { ...option });
};

// 쿠키 정보 가져오기
export const getCookie = (key) => {
  return cookies.get(key);
};

// 쿠키 삭제
export const removeCookie = (key, option) => {
  cookies.remove(key, { ...option });
};
