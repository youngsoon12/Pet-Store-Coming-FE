/** @jsxImportSource @emotion/react */

import { styles } from './SocialBtnCSS';

/**
 * @description: 로그인 페이지에 사용되는 소셜 로그인 버튼 컴포넌트를 반환
 * @param { Object } props - 소셜 로그인 버튼 컴포넌트에 전달되는 속성
 * @param { string } props.bgColor - 배경 색상
 * @param { string } props.color - 소셜 로그인에서 제공하는 이미지
 * @param { string } props.loginText - 소셜 로그인 플랫폼 텍스트
 * @param { Object } props.platformIcon - 소셜 로그인 플랫폼 아이콘 컴포넌트
 * @param { function } props.onClick - 나중에 주석 수정
 * @returns
 */

function SocialButton({
  bgColor,
  color,
  border,
  loginText,
  platformIcon,
  onClick,
}) {
  return (
    <div css={styles.button({ bgColor, color, border })}>
      <div css={styles.container()}>
        {platformIcon}
        <span>{loginText}</span>
      </div>
    </div>
  );
}

export default SocialButton;
