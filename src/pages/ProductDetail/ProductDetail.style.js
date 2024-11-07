/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  productImage: css`
    width: 100%;
    object-fit: cover;
  `,
  
  productInfo: css`
    font-size: 25px;
    color: #000;
    width: 90%;
  `,

  
  
  productTitle: css`
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    padding: 0 25px;
  `,

  productInfo_left_panel: css`
    display: flex;
    flex-direction: column;
    font-size: 16px;

    gap: 6px;

    & > span:first-of-type {
      font-weight: 700;
    }

  `,

  starsWrapper: css`
    align-items: center;
    flex-direction: column;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
  `,

  starIcon: css`
    width: 22px;
    height: 22px;
  `,

  reviewCount: css`
    display: inline-block;
    font-weight: 700;
    font-size: 12px;
    color: #9a9a9a;
    margin-top: 3px;
    
    padding-bottom: 2px;
    /* margin-left: 394px; */
  `,

  priceDetails: css`
    display: flex;
    align-items: center;
    margin-top: 5px;
  `,

  discount: css`
    font-size: 20px;
    color: #ED5729;
    font-weight: 700;
    margin-right: 5px;
  `,

  price: css`
    font-size: 20px;
    color: #000;
    font-weight: bold;
  `,

  originalPrice: css`
    font-size: 20px;
    color: #D9D9D9;
    margin-top: 5px;
    text-decoration: line-through;
  `,

  separatorLine: css`
    /* width: 550px; */
    height: 1px;
    background-color: #D9D9D9;
    margin-top: 30px;
    border-bottom: 1px solid #ddd;
   // margin: 20px 0;
  `,

  descriptionImages: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 25px;
    font-weight:500;
    margin-top: 20px;
    text-align: center;
  `,

  descriptionImage: css`
    width: 100%;
    object-fit: cover;
  `,

  toggleButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width:90%;
    height: 52px;
    margin: 0 auto;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 7px;
    color: #000;
    border: 1px solid #000;
    background: none;
    cursor: pointer;
    svg {
      margin-left: 8px;
      transition: transform 0.3s ease;
    }
  `,
  
};
