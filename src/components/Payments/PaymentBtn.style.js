import { css } from '@emotion/react';

export const styles = {
  container: css`
    position: sticky;
    bottom: 0;
    width: 100%;
    display: flex;
    font-size: 28px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    background-color: #171717;
    color: #ed5729;
    box-sizing: border-box;
    border: 0px;
    padding: 20px 0px;
    cursor: pointer;
    :disabled {
      background-color: #e4e4e4; /* 비활성화된 상태의 배경색 */
      color: #666666; /* 비활성화된 상태의 텍스트 색 */
      cursor: not-allowed; /* 비활성화된 상태에서 커서 모양 */
    }
  `,
  amount_area: css`
    font-weight: 800;
  `,
};
