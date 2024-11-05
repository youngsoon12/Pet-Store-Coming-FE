/** @jsxImportSource @emotion/react */

import { styles } from './horizontal_rule.style.js';

function HorizontalRole({ text }) {
  return (
    <div css={styles.line()}>
      {text && <span css={styles.text()}>{text}</span>}
    </div>
  );
}

export default HorizontalRole;
