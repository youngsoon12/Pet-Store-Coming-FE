import { css } from '@emotion/react';

export const styles = {
  container: css`
    border: 1px solid #d9d9d9;
    border-radius: 7px;

    margin: 20px auto;
    padding: 15px;
    display: flex;
    flex-wrap: nowrap;
    gap: 5%;
  `,
  petProfile: css`
    width: 30%;
    /* min-width: 100px; */
    /* max-height: 153px; */
    aspect-ratio: 1;

    & > img {
      /* width: 30%; */
      display: block; /*img default display - inline-block*/
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  `,
  infoBox: css`
    width: 65%;
    & > div {
      display: flex;
    }
  `,
  row1: css`
    font-size: 20px;
    font-weight: bold;
    gap: 8px;
    align-items: center;
    margin-bottom: 12px;
  `,
  primary: css`
    background-color: #171717;
    border-radius: 3px;
    color: white;
    /* font-weight: bold; */
    padding: 0.2em 0.8em;
    font-size: 10px;
    line-height: 10px;
    /* vertical-align: middle; */
  `,
  row2: css`
    gap: 5px;
    font-size: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
    & > div {
      background-color: #d9d9d9;
      border-radius: 3px;
      padding: 0.2em 0.5em;
    }
  `,

  row3: css`
    font-size: 12px;
    background-color: #f2f5f8;
    border-radius: 4px;
    padding: 5%;
    gap: 6%;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 10px;
    font-weight: bold;
  `,
  title: css`
    font-size: 10px;
    color: #a9a9a9;
    margin-bottom: 5px;
  `,
  buttons: css`
    font-size: 12px;
    margin-left: auto;
    justify-content: flex-end;
    gap: 10px;
    & > button {
      border-radius: 4px;
      padding: 0.2em 1em;
      cursor: pointer;
    }
  `,
  editBtn: css`
    border: none;
    background-color: #171717;
    color: white;
  `,
  deleteBtn: css`
    border: 1px solid #f4f4f4;
    background-color: white;
    color: #171717;
  `,
};
