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
    color: #484848;
    flex-wrap: nowrap;
    align-items: center;
    flex-wrap: nowrap;
    box-sizing: border-box;
    @media (max-width: 480px) {
      flex-direction: row;
      align-items: flex-start;
    }
  `,
  product_info_text: css`
    width: 120px;
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
    @media (min-width: 480px) {
      width: 200px;
    }
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
    width: 80px;
    height: 80px;
    background-color: lightgray;
    border-radius: 7px;
    min-width: 60px;
    margin-right: 20px;
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

  button_area: css`
    display: flex;
    width: 80px;
    height: 80px;
    flex-direction: column;
    justify-content: center;
    margin-top: 5px;
    gap: 10px;
    margin-left: auto;
    @media (min-width: 480px) {
      margin-top: 10px;
    }
    @media (max-width: 480px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 320px) {
      width: 40px;
    }
  `,
  button_action: css`
    width: 100%;
    font-size: 2vw;
    background-color: white;
    border: 1px solid #e4e4e4;
    outline: none;
    color: gray;
    font-weight: 600;
    cursor: pointer;
    :hover {
      background-color: #f0f0f0;
    }
    @media (min-width: 480px) {
      font-size: 12px;
      padding: 5px;
    }
    @media (max-width: 480px) {
      font-size: 12px;
      padding: 5px;
    }
    @media (max-width: 320px) {
      font-size: 10px;
      padding: 5px;
    }
  `,
};
