/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styles } from './Button.style';

export default function Button({
  text,
  width,
  height,
  fontSize,
  fontWeight,
  onClick,
  disableUnselected,
  type,
  theme,
  padding,
  border,
}) {
  const buttonStyle = styles.button(
    theme,
    fontSize,
    fontWeight,
    padding,
    border
  );

  return (
    <button
      css={[
        buttonStyle,
        css`
          width: ${width}px;
          height: ${height}px;
        `,
      ]}
      onClick={onClick}
      disabled={disableUnselected}
      type={type}
    >
      {text}
    </button>
  );
}
