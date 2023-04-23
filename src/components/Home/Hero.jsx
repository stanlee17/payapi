import React from 'react';
import PhoneMockup from '../../assets/home/desktop/illustration-phone-mockup.svg';
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { Link } from 'react-router-dom';
import PAButton from '../common/PAButton';

const Hero = () => {
  return (
    <div className="bg-linkWaterWhite relative z-10">
      <div className="container mx-auto px-6 flex justify-between items-center pt-16 pb-24 relative max-lg:flex-col-reverse max-md:pt-5">
        <div className="w-1/2 max-xl:w-2/3 max-lg:w-3/4 max-md:w-full">
          <h1 className="pb-10 font-serif text-7xl text-sanJuanBlue max-lg:text-5xl max-lg:text-center max-sm:text-3xl">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="max-lg:text-center">
            <form className="drop-shadow-primary">
              <input
                type="email"
                placeholder="Enter email address"
                className="pl-7 w-80 py-3 rounded-full outline-none focus:ring-0 border-none max-sm:w-full max-sm:mb-5"
              />
              <PAButton className="-ml-10 z-50 relative max-sm:ml-0 max-sm:w-full">
                Schedule a Demo
              </PAButton>
            </form>
            <p className="text-lightSanJuanBlue ml-7 my-5">
              Have any questions?
              <Link
                to="/contact"
                className="text-lightSanJuanBlue font-bold transition ease-in-out duration-500 hover:text-sanJuanBlue ml-2"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
        <img
          src={PhoneMockup}
          alt="phone-mockup"
          className="
          w-[18rem] max-lg:w-[12rem] mr-20 max-xl:mr-0 max-lg:mb-12 drop-shadow-primary z-50"
        />
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute min-w-[60rem] bottom-40 max-lg:bottom-[36rem] max-md:bottom-[42rem] -right-[25rem] max-lg:-right-[6rem] max-md:-right-[10rem] max-sm:-right-[15rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
