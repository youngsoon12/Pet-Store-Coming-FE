/** @jsxImportSource @emotion/react */
import { styles } from './PurchaseButton.style';

const PurchaseButton = ({ onClick }) => {
  return (
    <button css={styles.button} onClick={onClick}>
      구매하기
    </button>
  );
};

export default PurchaseButton;
