/** @jsxImportSource @emotion/react */

import { styles } from './HorizontalRuleCSS.js';

function HorizontalRole({ text }) {
  return (
    <div css={styles.line()}>
      <span css={styles.text()}>{text}</span>
    </div>
  );
}

export default HorizontalRole;
