/** @jsxImportSource @emotion/react */
import { styles } from './TextInputCSS';

/**
 * @description: 로그인 페이지에 사용되는 소셜 로그인 버튼 컴포넌트를 반환
 * @param { Object } props - 소셜 로그인 버튼 컴포넌트에 전달되는 속성
 * @param { string } props.bgColor - 소셜 로그인 버튼 배경 색상
 * @param { string } props.color - 소셜 로그인 버튼 텍스트 색상
 * @param { string } props.border - 소셜 로그인 버튼 테두리 선
 * @param { string } props.loginText - 소셜 로그인 버튼 텍스트
 * @param { Object } props.platformIcon - 소셜 로그인 버튼 아이콘
 * @param { function } props.onClick - 나중에 주석 수정
 * @returns JSX 컴포넌트 반환
 */
function TextInput({
  direction,
  type,
  labelText,
  filedId,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div css={styles.filed(direction)}>
      <label htmlFor={filedId} css={styles.label(direction)}>
        {labelText}
      </label>
      <input
        type={type}
        id={filedId}
        name={filedId}
        placeholder={placeholder}
        css={styles.input()}
      />
    </div>
  );
}

export default TextInput;
