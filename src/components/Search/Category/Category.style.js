/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const styles = {
    categoryContainer: css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-top: 20px; 
    `,

    categoryTitle: css`
        font-size: 30px;
        font-weight:700;
        color: #000;
        margin-bottom: 18px;
    `,

    itemsLabel: css`
        font-size: 20px;
        color: #484848;
        margin: 24px 0 0 20px;
        font-weight: 700;
    `,

    categoryGridContainer: css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px 120px; 
        margin-top: 24px;
        width: 100%;
    `,

    productGridContainer: css`
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px; 
        margin-top: 24px;
        width: 100%;
    `,

    itemGridImageContainer: css`
        margin-top: 10px;
    `,

    itemGridImage: css`
        width: 275px;
        height: 265px;
        background-color: #e0e0e0;
        border-radius: 15px;
        margin-bottom: 17px;
    `,

    itemGridTitle: css`
        font-size: 15px;
        margin-bottom: 6px;
        color: #484848;
        font-weight: 800;
        margin-left: 30px;
    `,

    itemGridPrice: css`
        font-size: 14px;
        color: #9A9A9A;
        font-weight: 800;
        margin-left: 30px;
    `,

    itemList: css`
        list-style: none;
        padding: 0;
        margin: 0;
    `,

    item: css`
        font-size: 20px;
        font-weight: 300;
        color: #000;
        width: 130px;
        margin-bottom: 18px;
        border-bottom: 1px solid #9A9A9A;
    `,
};
