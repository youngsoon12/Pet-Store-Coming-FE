/** @jsxImportSource @emotion/react */
import { styles } from './button.style.js';

function Button({ bgColor, color, text, width, marginTop }) {
  return <button css={styles(bgColor, color, width, marginTop)}>{text}</button>;
}

export default Button;
