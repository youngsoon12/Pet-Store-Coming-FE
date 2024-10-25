import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function KakaoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    // 현재 URL 주소에서 code 변수를 가진 url parameter를 가져오는 코드 (카카오 인가 코드)
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    // 인가 코드를 정확히 가져왔을 경우 상위 컴포넌트로 전달
    if (code) {
      window.opener.postMessage({ code }, 'http://localhost:5173');
      navigate('/login');
    }
  }, [navigate]);

  return null;
}

export default KakaoRedirect;
