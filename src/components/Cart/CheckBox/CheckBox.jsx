/** @jsxImportSource @emotion/react */
export default function CheckBox({ id, checked, checkItemHandler }) {
  const checkHandler = (e) => {
    checkItemHandler(e.target.id, e.target.checked);
  };

  return (
    <label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={checkHandler}
      />
      {id}
    </label>
  );
}
