import React from 'react';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';
import Logo from '../../assets/shared/desktop/logo.svg';

const Header = () => {
  return (
    <header className="flex items-center">
      <div className="flex items-center">
        <Link to="/">
          <img src={Logo} alt="payapi-logo" />
        </Link>
        <Link to="" className="inline-block">
          Pricing
        </Link>
        <Link to="">About</Link>
        <Link to="">Contact</Link>
      </div>
      <div>
        <PAButton>Schedule a Demo</PAButton>
      </div>
    </header>
  );
};

export default Header;
