import { css } from '@emotion/react';
export const styles = {
  container: css`
    height: 100%;
    width: 100%;
    padding: 30px;

    & > img {
      cursor: pointer;
    }
  `,
  section: css`
    margin-bottom: 50px;
  `,
  noPets: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    font-size: 20px;
    font-weight: bold;
    gap: 20px;
  `,
};
