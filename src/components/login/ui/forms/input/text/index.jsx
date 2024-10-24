import React from 'react';

function TextInput({ type }) {
  if (type === 'v') return <div>TextInputVerticalFile</div>;
  if (type === 'h') return <div>TextInputHorizontalFile</div>;
}

export default TextInput;
