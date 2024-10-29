/** @jsxImportSource @emotion/react */

import { styles } from './modal.style';

function Modal() {
  return (
    <div css={styles.modalContainer()}>
      <div css={styles.modalHader()}>
        <p>모달창</p>
      </div>
    </div>
  );
}

export default Modal;
