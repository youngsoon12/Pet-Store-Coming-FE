import { css } from '@emotion/react';

export const styles = {
  container: css`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  searchBox: css`
    display: flex;
    align-items: center;
    background-color: rgb(244, 244, 244);
    border-radius: 8px;
    padding: 10px;
    width: 450px;
    height: 40px;
    margin: 0 auto;
    border: 1px solid rgba(154, 154, 154, 0.6);
  `,

  input: css`
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
  `,

  searchIcon: css`
    border: none;
    background-color: rgb(244, 244, 244);
    font-size: 14px;
  `,
};
