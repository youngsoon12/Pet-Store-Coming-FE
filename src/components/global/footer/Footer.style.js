import { css } from '@emotion/react';

export const styles = {
  footerContainer() {
    return css`
      border-top: 1px solid rgba(25, 25, 25, 0.2);
      padding: 45px 100px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      justify-content: space-between;
    `;
  },
  footerLeftPanel() {
    return css`
      width: fit-content;

      display: flex;
      flex-direction: column;

      h2 {
        font-size: 24px;
        font-weight: 900;
        margin-bottom: 12px;
      }

      .teamInfo {
        font-size: 14px;
        margin-bottom: 8px;
        color: #9a9a9a;
      }

      & > span:last-child {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 600;
        margin-top: 2px;
      }
    `;
  },
  footerRightPanel() {
    return css`
      display: flex;
      gap: 80px;

      font-size: 14px;

      & .title {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        margin-bottom: 15px;
      }

      .optionBox {
        display: flex;
        flex-direction: column;
        gap: 15px;
        cursor: pointer;
      }
    `;
  },
};
