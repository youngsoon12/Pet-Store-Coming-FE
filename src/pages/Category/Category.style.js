/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const styles = {
  mainContainer: css`
    width: 600px;
  `,
  header: css`
    width: 600px;
    height: 52px;
  `,
  tabBarContainer: css`
    width: 600px;
    height: 50px;
    border-bottom: 1px solid #9A9A9A;
    display: flex;
    align-items: center;
    padding-left: 20px;
  `,
  tabItem: (isActive) => css`
    font-size: 15px;
    color: ${isActive ? '#000000' : '#9A9A9A'};
    cursor: pointer;
    flex: auto;

    &:first-of-type {
      margin-left: 20px;
    }
  `,
  bestItemsLabel: css`
    font-size: 20px;
    color: #000000;
    margin-top: 27px;
    margin-left: 20px;
    font-weight: 700;
  `,
  productCarousel: css`
    display: flex;
    overflow-x: scroll;
    padding-left: 20px;
    margin-top: 20px;
    gap: 20px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
  `,
  productItem: css`
    width: 200px;
    text-align: left;
  `,
  productImage: css`
   width: 275px;
   height: 265px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   // background-color: #e0e0e0;
    margin-bottom: 10px;
    border-radius: 7px;
  `,

  itemGridImage: css`
  width: 200px;
  height: 200px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin-bottom: 10px;
  border-radius: 7px;
  `,
  productTitle: css`
    font-size: 14px;
    color: #484848;
    font-weight:800;
    margin-bottom: 5px;
    margin-left: 10px
    
  `,
  productName: css`
    font-size: 14px;
    color: #484848;
    font-weight:500;
    margin-bottom: 5px;
    margin-left: 10px
    
  `,
  productPrice: css`
  text-decoration: line-through;
    font-size: 14px;
    font-weight:800;
    color: #9A9A9A;
    margin-left: 10px
  `,
  divider: css`
    width: 600px;
    height: 0.5px;
    background-color: #9A9A9A;
    margin: 33px 0;
  `,
  itemsLabel: css`
    font-size: 20px;
    color: #484848;
    margin-left: 20px;
    margin-top: 24px;
    font-weight: 700;
  `,
  itemGridContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 24px;
  `,
  itemGridImageContainer: css`
  //  text-align: center;
    margin-top: 10px;
  `,
  
  itemGridTitle: css`
    font-size: 15px;
    margin-bottom: 6px;
    color: #484848;
    font-weight: 800;
    margin-left: 10px
  `,
  itemGridPrice: css`
    font-size: 14px;
    color: #9A9A9A;
    text-decoration: line-through;
    font-weight: 800;
    margin-left: 10px
    
  `,
  itemPrice: css`
    font-size: 14px;
    color: #000000;
    font-weight: 800;
    margin-left: 10px
    
  `,
  productWrapper: css`
    display: flex;
    margin-top: 2px;
  `,

  itemGridDiscount: css`
    font-size: 14px;
    color: #ed5729;
    font-weight: 800;
    margin-left: 10px
  `,
};
