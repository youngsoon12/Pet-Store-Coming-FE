/** @jsxImportSource @emotion/react */
import { styles } from './button.style.js';

function Button({ bgColor, color, text }) {
  return <button css={styles(bgColor, color)}>{text}</button>;
}

export default Button;
