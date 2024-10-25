import { useEffect } from 'react';

function KakaoRedirect() {
  console.log('Hello');

  useEffect(() => {
    // 현재 URL 주소에서 code 변수를 가진 url parameter를 가져오는 코드 (카카오 인가 코드)
    const urlParams = new URLSearchParams(window.location.search);

    console.log(urlParams);
    const code = urlParams.get('code'); // 인가 코드 가져오기

    console.log(code);

    // 인가 코드를 정확히 가져왔을 경우 상위 컴포넌트로 전달
    if (code) {
      if (window.opener) {
        window.opener.postMessage(
          { type: 'KAKAO_AUTH_CODE', code },
          'http://localhost:5173'
        );
      }

      window.close();
    }
  }, []);

  return null;
}

export default KakaoRedirect;
