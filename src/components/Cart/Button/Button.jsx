/** @jsxImportSource @emotion/react */
import { styles } from './Button.style';
export default function Button({
  type,
  width,
  fontSize,
  fontWeight,
  padding,
  text,
}) {
  return (
    <button css={styles.button(type, width, fontSize, fontWeight, padding)}>
      {text}
    </button>
  );
}
