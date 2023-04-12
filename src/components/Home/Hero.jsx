import React from 'react';
import PhoneMockup from '../../assets/home/desktop/illustration-phone-mockup.svg';
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center py-52  relative">
        <div className="w-2/5">
          <h1 className="pb-10 font-serif text-7xl text-sanJuanBlue">
            Start building with our APIs for absolutely free.
          </h1>
          <form className="drop-shadow-lg">
            <input
              type="email"
              placeholder="Enter email address"
              className="pl-7 pr-20 py-3 rounded-full outline-none"
            />
            <PAButton className="-ml-10 z-50 relative">
              Schedule a Demo
            </PAButton>
          </form>
          <p className="text-lightSanJuanBlue ml-7 my-5">
            Have any questions?{' '}
            <Link
              to="/contact"
              className="text-lightSanJuanBlue font-bold transition ease-in-out duration-500 hover:text-sanJuanBlue"
            >
              Contact Us
            </Link>
          </p>
        </div>
        <img
          src={PhoneMockup}
          alt="phone-mockup"
          className="w-[34rem] absolute top-0 right-0 z-50"
        />
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute w-[65rem] -top-96 -right-96"
        />
      </div>
    </div>
  );
};

export default Hero;
