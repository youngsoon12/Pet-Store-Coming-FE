import { Children } from 'react';

export default function ContentsWrapper({ children }) {
  return (
    <div
      style={{
        width: '100%',
        minHeight: 'calc(100vh - 108px)',
        overflowY: 'scroll',
      }}
    >
      <div>{children}</div>
    </div>
  );
}
