import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    min-width: 320px;
    max-width: 600px;
    box-sizing: border-box;
    padding: 32px;
  `,

  // Global
  title: css`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 18px;
  `,
  title_area: css`
    display: flex;
    justify-content: space-between;
  `,
  warn: css`
    font-size: 12px;
    font-weight: 500;
    color: #5d5d5d;
    margin-right: 29px;
    text-align: center;
  `,

  red_star: css`
    color: #ed5729;
    vertical-align: sub;
  `,

  horizon: css`
    width: 100%;
    border: 1px solid #171717;
    margin: 20px 0px 30px 0px;
  `,
};
