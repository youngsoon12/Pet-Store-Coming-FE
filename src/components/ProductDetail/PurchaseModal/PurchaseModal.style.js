/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const styles = {
    overlay: css`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
    cursor: pointer;

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  controlsContainer: css`
    width: 600px;
    position: sticky;
    bottom: 0;
    background-color: white;
    border-radius: 20px 20px 0 0;
    padding: 20px;
    box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: slideUp 0.3s forwards;

    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }
  `,
  dragHandle: css`
    cursor: grab;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    margin-bottom: 10px;
  `,
  dragBar: css`
    background-color: #e4e4e4;
    width: 40px;
    height: 4px;
    border-radius: 2px;
  `,
  quantityControl: css`
    display: flex;
    align-items: center;
    border: 1px solid #d9d9d9;
    border-radius: 5px;
    width: 500px;
    height: 43px;
    margin-bottom: 20px;

    & > span {
      font-weight: bold;
      font-size: 19px;
      padding: 0 30px;
    }
  `,
  quantityButton: css`
    width: 239px;
    height: 20px;
    border: none;
    background: none;
    font-size: 18px;
  `,
  quantityText: css`
    font-weight: bold;
    font-size: 19px;
  `,
  priceInfo: css`
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
  `,
  price: css`
    margin-left: 355px;
  `,
  divider: css`
    width: 532px;
    height: 3px;
    background-color: #000;
    margin-bottom: 15px;
  `,
  totalInfo: css`
    display: flex;
    justify-content: space-between;
    width: 500px;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  `,
  totalPrice: css`
    color: #ff5a00;
  `,
  buttonContainer: css`
    display: flex;
    gap: 14px;
  `,
};
