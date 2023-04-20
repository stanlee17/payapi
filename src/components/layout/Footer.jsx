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
      <div className="container mx-auto px-6 py-10 relative">
        <div className="flex justify-between max-sm:flex-col max-sm:items-center">
          <div className="flex items-center font-bold text-neutral-300 z-50 max-sm:flex-col">
            <Link to="/" className="mr-16 max-sm:mr-0 max-sm:mb-5">
              <Logo fill="#fbfcfe" />
            </Link>
            <Link to="/pricing" className="mr-10 max-sm:mr-0 max-sm:my-5">
              Pricing
            </Link>
            <Link to="/about" className="mr-10 max-sm:mr-0 max-sm:mb-5">
              About
            </Link>
            <Link to="/contact" className="max-sm:mb-5">
              Contact
            </Link>
          </div>
          <div className="flex items-center z-50 max-sm:mt-5">
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
            className="absolute -top-32 -right-[33rem] max-lg:-right-[25rem] max-sm:top-48 max-sm:right-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
