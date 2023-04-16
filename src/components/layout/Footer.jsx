// Import React modules
import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import Logo from '../svg/Logo';
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import Facebook from '../../assets/shared/desktop/facebook.svg';
import Twitter from '../../assets/shared/desktop/twitter.svg';
import LinkedIn from '../../assets/shared/desktop/linkedin.svg';

const Footer = () => {
  return (
    <footer className="py-3 bg-mirageBlue">
      <div className="container mx-auto py-10 relative">
        <div className="flex justify-between">
          <div className="flex items-center font-bold text-neutral-300">
            <Link to="/" className="mr-16">
              <Logo fill="#fbfcfe" />
            </Link>
            <Link to="/pricing" className="mr-10">
              Pricing
            </Link>
            <Link to="/about" className="mr-10">
              About
            </Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="mr-6">
              <img src={Facebook} alt="facebook" />
            </Link>
            <Link to="/" className="mr-6">
              <img src={Twitter} alt="twitter" />
            </Link>
            <Link to="/">
              <img src={LinkedIn} alt="linkedin" />
            </Link>
          </div>
          <img
            src={bgCircle}
            alt="bg-circle"
            className="absolute -top-32 -right-[33rem]"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
