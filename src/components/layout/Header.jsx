import React from 'react';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';

// Import svg images
import Logo from '../svg/Logo';
import Menu from '../../assets/shared/mobile/menu.svg';

const Header = () => {
  return (
    <header className="py-10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center text-lightSanJuanBlue font-bold ">
          <Link to="/" className="mr-16">
            <Logo fill="#36536b" />
          </Link>
          <Link
            to="/pricing"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue max-md:hidden"
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue max-md:hidden"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-10 transition ease-in-out duration-300 hover:text-sanJuanBlue max-md:hidden"
          >
            Contact
          </Link>
        </div>
        <div className="relative z-50 max-md:hidden">
          <PAButton>Schedule a Demo</PAButton>
        </div>
        <img src={Menu} alt="hamburger-menu" className="hidden max-md:block" />
      </div>
    </header>
  );
};

export default Header;
