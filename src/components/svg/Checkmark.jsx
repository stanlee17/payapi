import React from 'react';

const Checkmark = ({ color }) => {
  return (
    <svg
      className="mr-5"
      width="14"
      height="11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5.718L4.893 9.56l8.107-8"
        stroke={color}
        stroke-width="2"
        fill="none"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default Checkmark;
