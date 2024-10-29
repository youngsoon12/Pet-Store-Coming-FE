/** @jsxImportSource @emotion/react */

import { styles } from './HorizontalRuleCSS.js';

function HorizontalRole({ text }) {
  return (
    <div css={styles.line()}>
      {text && <span css={styles.text()}>{text}</span>}
    </div>
  );
}

export default HorizontalRole;
