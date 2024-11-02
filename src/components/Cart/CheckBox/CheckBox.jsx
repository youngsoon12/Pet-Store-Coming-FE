/** @jsxImportSource @emotion/react */
import { styles } from './CheckBox.style';
export default function CheckBox({ id, checked, checkItemHandler, labelText }) {
  const checkHandler = (e) => {
    checkItemHandler(id, e.target.checked);
  };

  return (
    <div css={styles.controlContainer}>
      {id === 'all' ? (
        <input
          id={id}
          type="checkbox"
          onChange={checkItemHandler}
          checked={checked}
          css={styles.screenReader}
        />
      ) : (
        <input
          id={id}
          type="checkbox"
          onChange={checkHandler}
          checked={checked}
          css={styles.screenReader}
        />
      )}
      <div css={styles.labelBox}>
        <span
          css={[styles.checkIcon, checked && styles.checkedCheckIcon]}
          aria-hidden="true"
        />
        <label htmlFor={id} css={styles.label}>
          {labelText}
        </label>
      </div>
    </div>
  );
}
