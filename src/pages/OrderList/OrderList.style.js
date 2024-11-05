import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin-bottom: auto;
    min-width: 320px;
    max-width: 600px;
    box-sizing: border-box;
    padding: 32px;
  `,

  // Global
  title: css`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 40px;
  `,

  horizon: css`
    width: 100%;
    border: 1px solid #171717;
    margin: 20px 0px 30px 0px;
  `,
};
