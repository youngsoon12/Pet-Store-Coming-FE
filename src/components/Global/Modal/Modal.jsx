/** @jsxImportSource @emotion/react */

import { styles } from './Modal.style';

function Modal({ title, description, content, actionsBtn, setState }) {
  return (
    // 모달창 바깥 영역
    <div css={styles.modalOuterContainer()} onClick={() => setState(false)}>
      {/* 모달창 컨테이너 */}
      <div
        css={styles.modalContainer(content)}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 모달창 헤더 */}
        <div css={styles.modalHader()}>
          <p>{title}</p>
        </div>

        {content ? (
          content
        ) : (
          <>
            {/* 모달창 본문 */}
            <div css={styles.modalContent()}>{description}</div>

            {/* 모달창 버튼 */}
            <div css={styles.modalActionsBtn()}>
              {actionsBtn &&
                actionsBtn.length &&
                actionsBtn.map((action, idx) => (
                  <button key={idx} onClick={action.onClick}>
                    {action.title}
                  </button>
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
