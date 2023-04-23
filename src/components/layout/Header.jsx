import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';

// Import svg images
import Logo from '../svg/Logo';
import Menu from '../../assets/shared/mobile/menu.svg';
import Close from '../svg/Close';

const Header = () => {
  // State hooks
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="py-10">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center text-lightSanJuanBlue font-bold z-50">
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

        {/* Hamburger Menu */}
        <div className="hidden cursor-pointer z-50 max-md:block">
          <img
            src={Menu}
            alt="hamburger-menu"
            className="hidden max-md:block z-50"
            data-hs-overlay="#hs-overlay-right"
          />
        </div>

        {/* Offcanvas */}
        <div
          id="hs-overlay-right"
          class="hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 right-0 transition-all duration-300 transform h-full px-8 w-4/5 z-[60] bg-mirageBlue md:w-1/2 lg:w-4/12 xl:w-3/12"
          tabindex="-1"
        >
          <div class="flex justify-end items-center pt-12 pb-7 border-b border-[#404B56]">
            <div className="cursor-pointer" data-hs-overlay="#hs-overlay-right">
              <Close />
            </div>
          </div>

          <div className="flex flex-col text-center">
            <Link
              to="/pricing"
              data-hs-overlay="#hs-overlay-right"
              className="font-bold text-xl transition ease-in-out duration-300 text-[#B7BCC0] py-8"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              data-hs-overlay="#hs-overlay-right"
              className="font-bold text-xl transition ease-in-out duration-300 text-[#B7BCC0] py-8"
            >
              About
            </Link>
            <Link
              to="/contact"
              data-hs-overlay="#hs-overlay-right"
              className="font-bold text-xl transition ease-in-out duration-300 text-[#B7BCC0] py-8 pb-12"
            >
              Contact
            </Link>
            <PAButton>Schedule a Demo</PAButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
