import React from 'react';
import { Link } from 'react-router-dom';

const PAButtonLink = ({ children, to, color, className }) => {
  return (
    <Link
      to={to}
      className={`border-solid border border-${color} text-${color} rounded-full ${className} px-8 py-3 inline-block`}
    >
      {children}
    </Link>
  );
};

export default PAButtonLink;
