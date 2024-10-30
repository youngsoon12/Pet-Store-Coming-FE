import Cookies from 'universal-cookie';

const cookies = new Cookies();

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
