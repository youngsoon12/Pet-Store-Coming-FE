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
    font-size: 7vw;
    margin-bottom: 18px;
    @media (min-width: 480px) {
      font-size: 24px;
    }
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
    margin: 20px 0px 30px 0px;
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
    &:focus {
      outline: 1px solid black;
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
    &:focus {
      outline: 1px solid black;
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
    /* display: flex;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    height: 500px; // 임시 */
  `,

  payment_container: css`
    width: 100%;
    margin: 20px;
  `,

  payment_title: css`
    display: flex;
    justify-content: space-between;
  `,

  payment_horizon: css`
    width: 100%;
    border: 0.5px solid #d9d9d9;
    margin: 20px 0px;
  `,

  payment_paymentPrice: css`
    font-size: 7vw;
    font-weight: 800;
    color: #ed5729;
    @media (min-width: 480px) {
      font-size: 30px;
    }
  `,
  payment_paymentPrice_icon: css`
    width: 6vw;
    margin-left: 15px;
    cursor: pointer;
    @media (min-width: 480px) {
      width: 24px;
    }
  `,
  payment_toggle_area: css`
    display: flex;
    flex-direction: column;
    gap: 15px;
  `,
  payment_toggle_area_content: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 3.5vw;
    @media (min-width: 480px) {
      font-size: 16px;
    }
  `,
  payment_toggle_area_content_noDiscount: css`
    font-weight: 600;
  `,
  payment_toggle_area_content_discount: css`
    color: #ed5729;
    font-weight: 600;
  `,
  payment_toggle_content_last_price: css`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 7vw;
    margin-bottom: 10px;
    @media (min-width: 480px) {
      font-size: 24px;
    }
  `,

  // 개인정보

  personalInfoArea: css``,
  personalInfo_text: css`
    display: flex;
    flex-direction: row;
    margin: 0px 10px 10px 10px;
  `,

  hiddenCheckbox: css`
    display: none; /* 기본 체크박스 숨기기 */
  `,

  checkboxLabel: css`
    display: flex;
    align-items: center;
  `,

  personalInfo_checkbox: css`
    width: 16px;
    height: 16px;
    background-color: white;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    display: inline-block;
    position: relative;
    margin-right: 10px;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    &::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 4px;
      width: 4px;
      height: 8px;
      border: solid #e4e4e4;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
      transition: border-color 0.2s ease;
    }

    /* 체크된 상태에서 체크 표시 색상 변경 */
    input[type='checkbox']:checked + & {
      background-color: black;
    }

    /* 체크된 상태에서 흰색 체크 표시 */
    input[type='checkbox']:checked + &::after {
      border-color: white;
    }
  `,

  personalInfo_checkbox_text: css`
    color: #6f6f6f;
  `,
};
