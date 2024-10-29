/** @jsxImportSource @emotion/react */
import { styles } from './textInput.style.js';

/**
 * @description: 로그인 페이지에서 사용되는 Input 컴포넌트
 * @param { Object } props - 로그인 Input 컴포넌트에 전달되는 속성
 * @param { string } props.direction - Input Filed 수직, 수평선 레이아웃 타입
 * @param { string } props.type - input 태그의 type 속성값
 * @param { string } props.labelText - input 태그의 label 텍스트
 * @param { string } props.filedId - input 태그의 id 속성값
 * @param { string } props.placeholder - input 태그의 placeholder 속성값
 * @param { string } props.value - input 태그의 value 속성값
 * @param { function } props.onChange - input 태그의 onChange 이벤트
 * @returns JSX 컴포넌트 반환
 */
function TextInput({
  direction,
  type,
  labelText,
  filedId,
  placeholder,
  errorMessage,
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
        css={styles.input(errorMessage)}
        value={value}
        onChange={onChange}
      />

      <p css={styles.errorMsg()}>{errorMessage}</p>
    </div>
  );
}

export default TextInput;
