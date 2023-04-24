import React from 'react';
import { Link } from 'react-router-dom';

const PAButtonLink = ({ children, to, className }) => {
  return (
    <Link
      to={to}
      className={`border border-solid rounded-full ${className} px-8 py-3 inline-block transition ease-in-out duration-300`}
    >
      {children}
    </Link>
  );
};

export default PAButtonLink;
