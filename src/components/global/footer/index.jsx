/** @jsxImportSource @emotion/react */

import { styles } from './Footer.style';

function Footer() {
  return (
    <div css={styles.footerContainer()}>
      <div css={styles.footerLeftPanel()}></div>
      <div css={styles.footerRightPanel()}></div>
    </div>
  );
}

export default Footer;
