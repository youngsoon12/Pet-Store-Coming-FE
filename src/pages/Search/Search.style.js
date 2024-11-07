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
    border-radius: 16px;
    padding: 10px;
    width: 450px;
    height: 40px;
    margin: 0 58px;
  `,

  input: css`
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 18px;
  `,

  searchIcon: css`
    border: none;
    background-color: rgb(244, 244, 244);
    margin-right: 11px;
    font-size: 20px;
  `,
};
