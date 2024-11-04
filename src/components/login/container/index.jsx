/** @jsxImportSource @emotion/react */
import { styles } from './container.style.js';

function Container({ isForm, onSubmit, gap, children }) {
  const Tag = isForm ? 'form' : 'div';

  return (
    <Tag onSubmit={onSubmit} css={styles.container(gap)}>
      {children}
    </Tag>
  );
}

export default Container;
