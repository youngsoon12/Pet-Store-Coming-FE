/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  mainContainer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  imageGrid: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 20px 0 20px;
  `,
  mainImage: css`
    width: 100%;
    border-radius: 15px;
    /* margin: 0 20px; */
  `,
  textContainer: css`
    margin-top: 20px;
    margin-right: 20px;
  `,
  title: css`
    font-size: 22px;
    font-weight: bold;
  `,
  subtitle: css`
    font-size: 18px;
    margin-top: 10px;
  `,
  subImagesContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 30px;
  `,
  subImage: css`
    width: 100%;
    border-radius: 15px;
  `,
};
