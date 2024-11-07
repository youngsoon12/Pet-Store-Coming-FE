import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px 0;
    width: 100%;
  `,

  label: css`
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 35px;
    font-weight: bold;
    color: #9a9a9a;
  `,
  imgContainer: css`
    width: 190px;
    aspect-ratio: 1;
    margin-bottom: 60px;
  `,

  cameraIcon: css`
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
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
  // titleLabel: css`
  //   margin-top: 15px;
  //   display: flex;
  // `,
  registerButton: css`
    margin-top: 25px;
    margin-left: 180px;
  `,
};
