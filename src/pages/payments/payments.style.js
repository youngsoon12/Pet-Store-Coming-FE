import { css } from '@emotion/react';

export const styles = {
  container: css`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    min-width: 320px;
    max-width: 600px;
    box-sizing: border-box;
    padding: 32px;
  `,

  // Global
  title: css`
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 18px;
  `,
  title_area: css`
    display: flex;
    justify-content: space-between;
  `,
  warn: css`
    font-size: 12px;
    font-weight: 500;
    color: #5d5d5d;
    margin-right: 29px;
    text-align: center;
  `,

  red_star: css`
    color: #ed5729;
    vertical-align: sub;
  `,

  horizon: css`
    width: 100%;
    border: 1px solid #171717;
    margin: 10px 0px;
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
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  `,

  info_label: css`
    font-size: 16px;
    text-align: center;
    color: #303033;
    font-weight: 500;
    width: 20%;
    @media (max-width: 325px) {
      font-size: 12px;
    }
  `,

  info_input: css`
    font-size: 16px;
    padding: 10px;
    border: 1px solid #e4e4e4;
    width: 75%;
    @media (max-width: 325px) {
      font-size: 12px;
    }
  `,

  info_input_phone_container: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
  `,

  info_input_phone: css`
    width: 30%;
    font-size: 16px;
    padding: 10px;
    border: 1px solid #e4e4e4;
    max-width: 100%;
    @media (max-width: 325px) {
      font-size: 12px;
    }
  `,
  info_input_phone_tag: css`
    margin: 0 5px;
  `,

  // 상품 정보
  productArea: css``,

  productCard_area: css``,

  // 결제 금액
  paymentArea: css`
    display: flex;
    width: 90%;
    margin: 0 auto;
    justify-content: center;
    height: 500px; // 임시
  `,

  payment_container: css`
    width: 100%;
    margin: 20px;
  `,

  payment_title: css`
    font-size: 20px;
    font-weight: 700;
  `,

  payment_horizon: css`
    width: 100%;
    border: 0.5px solid #d9d9d9;
  `,
};
