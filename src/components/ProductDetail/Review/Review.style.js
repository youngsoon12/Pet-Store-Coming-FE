import { css } from '@emotion/react';

export const styles = {
  toggleButton: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 392px;
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


  reviewSection: css`
    margin-top: 50px;
  `,

  reviewHeader: css`
    display: flex;
    align-items: center;
  `,

  separatorLine: css`
    border-bottom: 1px solid #ddd;
    margin: 20px 0;
  `,

  reviewCountText: css`
    font-size: 20px;
    color: #000;
    font-weight: 700;
    margin-right: 11px;
  `,

  reviewStars: css`
    display: flex;
  `,

  reviewStarIcon: css`
    width: 22px;
    height: 22px;
  `,

  reviewForm: css`
    margin-top: 37px;
  `,

  reviewHeaderDetails: css`
    display: flex;
    align-items: center;
    gap: 20px; 
  `,

  reviewUser: css`
    font-size: 15px;
    color: #484848;
    margin-right: 143px;
  `,

  reviewDate: css`
    font-size: 15px;
    font-weight: bold;
    color: #484848;
  `,

  reviewType: css`
    font-size: 15px;
    color: #767676;
    font-weight: 600;
  `,

  reviewContent: css`
    margin-top: 18px;
    font-size: 15px;
    font-weight: 600;
    color: #171717;
  `,
};
