/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
  mainContainer: css`
     display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 20px;
  `,
  header: css`
    width: 100%;
    height: 52px;
  `,
  tabBarContainer: css`
     width: 100%;
    height: 50px;
    border-bottom: 1px solid #9A9A9A;
    display: flex;
    align-items: center;
    gap:30px
  `,
  tabItem: (isActive) => css`
    font-size: 15px;
    color: ${isActive ? '#000000' : '#9A9A9A'};
    cursor: pointer;
    //margin-right: 40px;

    &:first-of-type {
      margin-left: 20px;
    }
  `,
  bestItemsLabel: css`
    font-size: 20px;
    color: #000000;
    margin-top: 27px;
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
  
  productImage: css`
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
    //margin-left: 10px
    
  `,
  storeBrandName: css`
    font-size: 14px;
    color: #484848;
    font-weight:800;
    margin-bottom: 5px;
    
  `,
  productName: css`
    font-size: 14px;
    color: #484848;
    font-weight:500;
    margin-bottom: 5px;
    
  `,
  productPrice: css`
    font-size: 14px;
    font-weight:800;
    color: #9A9A9A;
    text-decoration: line-through;
  `,
  productRate: css`
    font-size: 14px;
    font-weight:800;
    color: #ed5729;;
  `,
  proDiscount: css`
    font-size: 14px;
    font-weight:800;
    color: #000000;
  `,
  
  divider: css`
    width: 100%;
    height: 0.5px;
    background-color: #9A9A9A;
    margin: 30px 0;
  `,
  itemsLabel: css`
    font-size: 20px;
    color: #484848;
   // margin-left: 20px;
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
  itemGridImage: css`
    width: 100%;
    height: 215px;
    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    border-radius: 15px;
    margin-bottom: 17px;
  `,
  itemGridTitle: css`
    font-size: 15px;
    margin-bottom: 6px;
    color: #484848;
    font-weight: 800;
   // margin-left: 10px
  `,
  productWrapper: css`
    display: flex;
    margin-top: 2px;
  `,
  itemGridPrice: css`
    font-size: 14px;
    text-decoration: line-through;
    color: #9A9A9A;
    font-weight: 800;
   // margin-left: 10px
  `,
};
