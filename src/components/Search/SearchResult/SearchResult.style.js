import { css } from '@emotion/react';

export const styles = {
  categoryContainer: css`
    width: 100%;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    margin: 20px 0;
  `,

  categoryTitle: css`
    font-size: 20px;
    font-weight: 900;
    color: #000;
    margin-bottom: 20px;
    cursor: pointer;
  `,

  itemsLabel: css`
    font-size: 20px;
    color: #484848;
    /* margin: 24px 0 0 20px; */
    font-weight: 700;
  `,

  categoryGridContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px 120px;
    margin-top: 24px;
    /* width: 100%; */
  `,

  productGridContainer: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 24px;
    /* width: 100%; */
  `,

  itemGridImageContainer: css`
    margin-top: 10px;
    cursor: pointer;
  `,

  itemGridImage(image) {
    return css`
      /* max-width: 215px; */
      height: 215px;
      background-color: #e0e0e0;
      border-radius: 15px;
      margin-bottom: 17px;
      overflow: hidden;

      background-image: url(${image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;
  },

  itemGridTitle: css`
    font-size: 16px;
    color: #484848;
    font-weight: 600;
  `,

  itemGridPrice_box: css`
    display: flex;
    flex-direction: column;

    margin-top: 3px;
    gap: 5px;

    & > .dicountPriceInfo {
      display: flex;
      gap: 5px;

      & > span:first-of-type {
        font-weight: 600;
        color: #ed5729;
      }

      & > span:last-child {
        font-weight: 600;
      }
    }
  `,

  itemGridPrice(discount) {
    return css`
      font-size: 14px;
      color: #9a9a9a;
      font-weight: ${discount ? 400 : 600};

      text-decoration: ${discount ? 'line-through' : ''};
      text-decoration-thickness: ${discount ? '2px' : ''};
    `;
  },

  itemList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,

  item: css`
    font-size: 14px;
    font-weight: 600;
    color: #000;
    width: 130px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #9a9a9a;
  `,

  storeInfo: css`
    display: flex;
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 800;
    color: #484848;
  `,
};
