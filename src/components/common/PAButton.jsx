import React from 'react';

const PAButton = ({ children, className }) => {
  return (
    <button
      className={`bg-darkPink text-linkWaterWhite font-medium px-7 py-3 rounded-full transition ease-in-out duration-300 hover:bg-charmPink ${className}`}
    >
      {children}
    </button>
  );
};

export default PAButton;
