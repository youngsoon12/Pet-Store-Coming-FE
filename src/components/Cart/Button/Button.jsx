/** @jsxImportSource @emotion/react */
import { styles } from './Button.style';
export default function Button({
  type,
  width,
  fontSize,
  fontWeight,
  padding,
  text,
  onClick,
}) {
  return (
    <button
      css={styles.button(type, width, fontSize, fontWeight, padding)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
