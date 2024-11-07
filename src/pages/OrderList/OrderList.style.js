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
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px 0px;
    margin-bottom: 40px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    @media (max-width: 375px) {
      font-size: 16px;
      margin-bottom: 30px;
      padding: 5px 0px;
    }
  `,

  horizon: css`
    width: 100%;
    border: 1px solid #171717;
    margin: 20px 0px 30px 0px;
  `,
};
