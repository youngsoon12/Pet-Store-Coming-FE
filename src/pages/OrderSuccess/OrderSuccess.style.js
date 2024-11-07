import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
  `,
  title: css`
    font-size: 30px;
    font-weight: 700;
  `,
  button: css`
    width: 200px;
    padding: 15px 20px;
    border: 0px;
    background-color: #e4e4e4;
    border-radius: 7px;
    cursor: pointer;

    :hover {
      opacity: 0.8;
    }
  `,
};
