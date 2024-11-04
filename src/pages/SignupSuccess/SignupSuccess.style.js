import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50%;
    min-height: calc(100vh - 52px);
  `,
  main: css`
    font-size: 20px;
    & > span {
      font-weight: bold;
    }
  `,
  sub: css`
    margin: 20px 0 30px 0;
  `,
  buttons: css`
    display: flex;
    gap: 10px;
  `,
};
