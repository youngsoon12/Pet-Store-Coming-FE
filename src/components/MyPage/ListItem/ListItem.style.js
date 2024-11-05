import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 0;
    &:not(:last-child) {
      border-bottom: 1px solid #d9d9d9;
    }
  `,
  engTitle: css`
    color: #a5a5a5;
  `,
};
