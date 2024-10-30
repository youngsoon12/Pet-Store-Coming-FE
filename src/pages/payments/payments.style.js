import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: center;
    /* align-items: center; */
    flex-direction: column;
    margin: 0 auto;
    min-width: 320px;
    max-width: 600px;
    box-sizing: border-box;
    border: 1px solid black;
  `,

  // Global
  title: css`
    font-weight: 600;
    font-size: 25px;
    margin-bottom: 18px;
  `,

  // 배송 정보
  infoArea: css`
    /* display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column; */
  `,
  info_input_area: css`
    display: flex;
    /* justify-content: center; */
    flex-direction: row;
    align-items: center;
  `,

  info_label: css`
    font-size: 18px;
    text-align: center;
    color: #303033;
    width: 20%;
  `,

  info_input: css`
    font-size: 18px;
    padding: 10px;
    border: 1px solid #e4e4e4;
    width: 60%;
  `,

  // 상품 정보
  productArea: css``,

  // 결제 금액
  paymentArea: css``,
};
