import React from 'react';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';
import Logo from '../../assets/shared/desktop/logo.svg';

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center text-lightSanJuanBlue font-bold ">
          <Link to="/" className="mr-16">
            <img src={Logo} alt="payapi-logo" />
          </Link>
          <Link
            to="/pricing"
            className="mr-9 transition ease-in-out duration-300 hover:text-sanJuanBlue"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="mr-9 transition ease-in-out duration-300 hover:text-sanJuanBlue"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-9 transition ease-in-out duration-300 hover:text-sanJuanBlue"
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
