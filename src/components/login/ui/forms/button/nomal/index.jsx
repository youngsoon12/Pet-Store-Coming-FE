/** @jsxImportSource @emotion/react */
import { styles } from './ButtonCSS';

function Button({ bgColor, color, text }) {
  return <button css={styles(bgColor, color)}>{text}</button>;
}

export default Button;
