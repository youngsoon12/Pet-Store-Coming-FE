/** @jsxImportSource @emotion/react */
import { styles } from './ContainerCSS';

function ColumnContainer({ isForm, onSubmit, children }) {
  const Tag = isForm ? 'form' : 'div';

  return (
    <Tag onSubmit={onSubmit} css={styles.container()}>
      {children}
    </Tag>
  );
}

export default ColumnContainer;
