import { css } from '@emotion/react';

export const styles = {
  product_info: css`
    display: flex;
    flex-direction: row;
    color: #484848;
    gap: 30px;
    flex-wrap: nowrap;
    align-items: center;
    margin: 0 10px;
    margin-bottom: 30px;
  `,

  product_info_img: css`
    width: 150px;
    height: 150px;
    background-color: lightgray;
    border-radius: 7px;
  `,
  product_info_text_name: css`
    color: #171717;
    font-weight: 800;
    margin-bottom: 10px;
  `,

  product_info_text_price: css`
    color: #484848;
    font-size: 13px;
    font-weight: 600;
  `,

  product_info_text_discountPrice: css`
    color: #ed5729;
    font-size: 13px;
    font-weight: 600;
  `,
};
