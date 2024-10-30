/** @jsxImportSource @emotion/react */

import { styles } from './modal.style';

function Modal({ title, description }) {
  return (
    // 모달창 바깥 영역
    <div>
      {/* 모달창 컨테이너 */}
      <div css={styles.modalContainer()}>
        {/* 모달창 헤더 */}
        <div css={styles.modalHader()}>
          <p>{title}</p>
        </div>

        {/* 모달창 본문 */}
        <div></div>

        <div></div>
      </div>
    </div>
  );
}

export default Modal;
