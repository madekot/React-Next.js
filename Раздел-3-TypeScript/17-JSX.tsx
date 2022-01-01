import React from 'react';

const a: JSX.Element = (
  <div tabIndex={0}>
    <span>{1 + 2}</span>
  </div>
);

const b: JSX.Element = React.createElement('div', { tabIndex: 0 }, 1 + 1);
