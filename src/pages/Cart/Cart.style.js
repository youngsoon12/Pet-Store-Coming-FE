import { css } from '@emotion/react';
import checked from '@assets/images/Cart/checked.svg';
export const styles = {
  container(isEmpty) {
    if (isEmpty) {
      return css`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40%;
        gap: 20px;
      `;
    } else {
      return css`
        margin-top: 10px;
        padding: 0 20px;
      `;
    }
  },
  phrase: css`
    color: #9a9a9a;
    margin-bottom: 10px;
  `,
  // check() {
  //   return css`
  //     width: 24px;
  //     height: 24px;
  //     /* border: 1px solid black; */
  //   `;
  // },
  head: css`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #171717;
    padding-bottom: 20px;
    color: #a9a9a9;
    & > div {
      padding: 0 5px;
    }
  `,
  checkAll: css`
    color: black;
    /* border-right: 1px solid black; */
  `,
};
