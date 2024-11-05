import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  `,

  label: css`
    font-size: 16px;
    margin-bottom: 15px;
    margin-top: 35px;
  `,
  cameraIcon: css`
    margin-bottom: 60px;
    width: 190px;
    height: 190px;
    border-radius: 10px;
  `,

  input: css`
    width: 100%;
    font-size: 16px;
    border: 1px solid #c2c6cc;
    display: flex;
    border-radius: 7px;
    padding: 10px 10px;
    margin-bottom: 35px;
    margin-top: 15px;
  `,
  genderButtonContainer: css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
    margin-top: 15px;
  `,
  titleLabel: css`
    margin-top: 15px;
    display: flex;
  `,
  registerButton: css`
    margin-top: 25px;
    margin-left: 180px;
  `,
};
