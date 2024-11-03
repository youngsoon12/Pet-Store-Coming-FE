import { css } from '@emotion/react';
import checked from '@assets/images/Cart/checked.svg';
export const styles = {
  container(isEmpty) {
    if (isEmpty) {
      return css`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -40%;
        gap: 20px;
      `;
    } else {
      return css`
        width: 100%;
        margin-top: 20px;
        padding: 0 20px 20px 20px;
        min-height: 100vh;
        /* justify-content: flex-start; */
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
    padding-bottom: 10px;
    color: #a9a9a9;
    font-size: 14px;
  `,
  itemBox: css`
    border-top: 3px solid #171717;
    padding: 10px 0 40px 0;
    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      font-size: 14px;
    }
  `,
  infoBox: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
  name: css`
    font-size: 16px;
    font-weight: bold;
  `,
  discountBox: css`
    color: #ff4801;
  `,
  quantityBox: css`
    display: flex;
    align-items: center;
    /* & > * {
      font-size: 20px;
      font-weight: bold;
    } */
  `,

  minusBtn: css`
    font-size: 20px;
    font-weight: bold;
    color: #a0a0a0;
    background: none;
    border-right: none;
    border-radius: 3px 0 0 3px;
    border-left: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  `,
  quantityInput: css`
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #d9d9d9;
    width: 40px;
    height: 28px;
    text-align: center;
  `,
  plusBtn: css`
    font-size: 20px;
    font-weight: bold;
    color: #a0a0a0;
    background: none;
    border-left: none;
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
  `,
  priceBox: css`
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    & strong {
      font-size: 18px;
    }
  `,
  thumbnail: css`
    width: 100px;
    height: 100px;
    border-radius: 5px;
  `,
  totalPriceBox: css`
    border-top: 1px solid #d9d9d9;

    & > div {
      display: flex;
      justify-content: space-between;
      padding-top: 10px;
    }
  `,
};
