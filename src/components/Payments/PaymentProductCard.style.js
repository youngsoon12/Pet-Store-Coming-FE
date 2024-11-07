import { css } from '@emotion/react';

export const styles = {
  wrap: css`
    width: 100%;
    max-width: 480px;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0 auto;
  `,

  product_info: css`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    color: #484848;
    gap: 30px;
    flex-wrap: nowrap;
    align-items: center;
    flex-wrap: nowrap;
    box-sizing: border-box;
    padding: 0px 20px;
    @media (max-width: 480px) {
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }
    @media (max-width: 375px) {
      padding: 0px;
    }
  `,

  product_info_text_name: css`
    color: #171717;
    width: 250px;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    @media (max-width: 480px) {
      font-size: 12px;
      width: 100%;
    }
  `,

  product_info_text_price: css`
    color: #484848;
    font-size: 13px;
    font-weight: 600;
    @media (max-width: 480px) {
      font-size: 10px;
    }
  `,

  product_info_text_discountPrice: css`
    color: #ed5729;
    font-size: 13px;
    font-weight: 600;
    @media (max-width: 480px) {
      font-size: 10px;
    }
  `,

  product_info_img: css`
    width: 100px;
    height: 100px;
    background-color: lightgray;
    border-radius: 7px;
    min-width: 60px;
    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
  `,

  product_info_horizon: css`
    width: 100%;
    border: 0.5px solid #d9d9d9;
    margin: 30px 0px;
  `,
};
