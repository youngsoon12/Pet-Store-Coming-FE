/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { styles } from './Button.style';

export default function Button({
  text,
  width,
  height,
  theme,
  fontSize,
  fontWeight,
  onClick,
  disableUnselected,
  type,
}) {
  const buttonStyle = styles.button(theme, fontSize, fontWeight);

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
