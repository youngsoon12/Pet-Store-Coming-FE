import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    padding: 20px 0;
    width: 100%;
    max-width: 470px;
  `,

  imgContainer: css`
    width: 190px;
    aspect-ratio: 1;
    margin-bottom: 60px;
  `,

  inputContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `,

  label: css`
    font-size: 14px;
    font-weight: bold;
    color: #9a9a9a;
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
    font-size: 14px;
    border: 1px solid #c2c6cc;
    display: flex;
    border-radius: 7px;
    padding: 10px 10px;
    outline: none;
    transition: 0.3s;

    &:focus {
      border: 1px solid #141414;
    }
  `,
  genderButtonContainer: css`
    display: flex;
    justify-content: space-between;
  `,
  // titleLabel: css`
  //   margin-top: 15px;
  //   display: flex;
  // `,
};
