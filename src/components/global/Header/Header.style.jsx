import { css } from '@emotion/react';

export const styles = {
  headerContainer: css`
    background-color: rgba(255, 255, 255, 0.7);
    /* background-color: rgba(1, 1, 1, 0.7); */
    backdrop-filter: blur(20px);
    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2); */
    height: 52px;
    min-height: 52px;
    width: 100%;
    max-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 8vw;
    padding: 0 20px;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 10000;
  `,

  icons: css`
    display: flex;
    gap: 15px; /* 각 아이콘 간의 간격 */
  `,

  title: css`
    font-weight: bold;
    font-size: 18px;
  `,
};
