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

//토큰 디코드
export const decodeToken = (token) => {
  try {
    // Base64 URL 인코딩을 일반 Base64로 변환
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    // Base64를 디코딩하여 JSON 파싱
    const payload = JSON.parse(
      decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    );

    return payload;
  } catch (e) {
    console.error('Invalid token', e);
    return null;
  }
};