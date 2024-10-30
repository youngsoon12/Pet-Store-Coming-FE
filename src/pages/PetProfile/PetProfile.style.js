/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex; 
    justify-content: space-between; 
    padding: 20px;
    margin-top: 100px;
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
  margin-left: 160px;
  border-radius: 10px;
`,

  input: css`
    width: 455px;
    height: 40px;
    font-size: 16px;
    border: 1px solid #c2c6cc;
    display: flex;
    border-radius: 7px;
    padding: 0 10px;
    margin-bottom: 35px; 
    margin-top: 15px;
  `,
  genderButtonContainer: css`
    display: flex; 
    margin-bottom: 35px; 
    gap: 30px;
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
