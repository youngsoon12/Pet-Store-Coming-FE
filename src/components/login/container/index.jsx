/** @jsxImportSource @emotion/react */
import { styles } from './ContainerCSS';

function ColumnContainer({ children }) {
  return <div css={styles.container()}>{children}</div>;
}

export default ColumnContainer;
