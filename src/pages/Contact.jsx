import React from 'react';
import PAButtonLink from '../components/common/PAButtonLink';

// Import images
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg';
import Tesla from '../components/svg/Tesla';
import Microsoft from '../components/svg/Microsoft';
import Hewlett from '../components/svg/Hewlett';
import Oracle from '../components/svg/Oracle';
import Google from '../components/svg/Google';
import Nvidia from '../components/svg/Nvidia';

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto px-6 my-16 relative max-xl:px-20 max-sm:px-6">
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -top-[43rem] -right-[18rem] max-sm:-top-[33rem] max-sm:-right-[13rem]"
        />
        <div className="my-12">
          <h1 className="font-serif text-6xl text-sanJuanBlue w-1/2 max-xl:text-center max-xl:w-full max-xl:text-5xl relative z-50">
            Submit a help request and we’ll get in touch shortly.
          </h1>
          <div className="flex justify-between my-12 max-xl:flex-col">
            <form className="">
              <input
                type="text"
                placeholder="Name"
                className="block w-full mb-8 border-x-0 border-t-0 border-[#C0CBD5] px-5 py-3 bg-transparent focus:ring-0"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="block w-full mb-8 border-x-0 border-t-0 border-[#C0CBD5] px-5 py-3 bg-transparent focus:ring-0"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="block w-full mb-8 border-x-0 border-t-0 border-[#C0CBD5] px-5 py-3 bg-transparent focus:ring-0"
              />
              <input
                type="text"
                placeholder="Title"
                className="block w-full mb-8 border-x-0 border-t-0 border-[#C0CBD5] px-5 py-3 bg-transparent focus:ring-0"
              />
              <textarea
                cols="60"
                rows="5"
                placeholder="Message"
                className="block w-full mb-8 border-x-0 border-t-0 border-[#C0CBD5] px-5 py-3 bg-transparent focus:ring-0 resize-none"
              ></textarea>
              <div className="flex items-center mb-8">
                <input
                  type="checkbox"
                  className="w-6 h-6 bg-[#C0CBD5] text-darkPink border-none focus:ring-0"
                />
                <label className="ml-5 text-sanJuanBlue">
                  Stay up-to-date with company announcements and updates to our
                  API
                </label>
              </div>
              <PAButtonLink className="text-sanJuanBlue border-sanJuanBlue font-bold px-[3.5rem]">
                Submit
              </PAButtonLink>
            </form>
            <div className="flex flex-col justify-center max-xl:my-16">
              <h3 className="ml-10 font-serif text-2xl text-lightSanJuanBlue w-3/4 max-xl:text-center max-xl:ml-0 max-xl:w-full max-xl:mb-5 max-sm:mb-8">
                Join the thousands of innovators already building with us
              </h3>
              <div className="grid items-center justify-items-center grid-cols-3 gap-0 h-[10rem] max-sm:grid-cols-2">
                <Tesla fill="#36536B" className="max-sm:pb-8" />
                <Microsoft fill="#36536B" className="max-sm:pb-8" />
                <Hewlett fill="#36536B" className="max-sm:pb-8" />
                <Oracle fill="#36536B" className="max-sm:pb-8" />
                <Google fill="#36536B" className="max-sm:pb-8" />
                <Nvidia fill="#36536B" className="max-sm:pb-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
