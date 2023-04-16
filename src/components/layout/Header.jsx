import React from 'react';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';

// Import svg images
import Logo from '../svg/Logo';

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-lightSanJuanBlue font-bold ">
          <Link to="/" className="mr-16">
            <Logo fill="#36536b" />
          </Link>
          <Link
            to="/pricing"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue"
          >
            Contact
          </Link>
        </div>
        <div className="flex z-50">
          <PAButton>Schedule a Demo</PAButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
