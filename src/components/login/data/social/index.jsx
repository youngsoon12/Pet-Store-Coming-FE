import Icon from '@/components/login/ui/icon';

import kakaoLogo from '@assets/images/login/logo/kakao.svg';
import naverLogo from '@assets/images/login/logo/naver.svg';
import googleLogo from '@assets/images/login/logo/google.svg';

export const socialLoginType = [
  {
    bgColor: '#FEE500',
    color: '#351D1D',
    loginText: '카카오 로그인',
    platformIcon: <Icon src={kakaoLogo} alt="kakao_logo" />,
  },

  {
    bgColor: '#03C75A',
    color: '#fff',
    loginText: '네이버 로그인',
    platformIcon: <Icon src={naverLogo} alt="naver_logo" />,
  },

  {
    bgColor: '#ffff',
    border: '0.5px solid rgba(0, 0, 0, 0.2)',
    loginText: '구글 로그인',
    platformIcon: <Icon src={googleLogo} alt="google_logo" />,
  },
];
