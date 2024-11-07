import { css } from '@emotion/react';

export const styles = {
  background: css`
    position: fixed;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1001;
  `,

  container: css`
    width: 85%;
    max-width: 550px;
    min-width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  title: css`
    display: flex;
    justify-content: space-between;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 5px;
  `,
  daum: css`
    height: 500px;
  `,
};
