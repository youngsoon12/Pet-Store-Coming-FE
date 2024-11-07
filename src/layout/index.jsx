/** @jsxImportSource @emotion/react */
import { styles } from './layout.style';
export default function Layout({ children }) {
  return <div css={styles.wrapper}>{children}</div>;
}
