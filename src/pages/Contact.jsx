import React from 'react';
import PAButtonLink from '../components/common/PAButtonLink';

// Import images
import Tesla from '../components/svg/Tesla';
import Microsoft from '../components/svg/Microsoft';
import Hewlett from '../components/svg/Hewlett';
import Oracle from '../components/svg/Oracle';
import Google from '../components/svg/Google';
import Nvidia from '../components/svg/Nvidia';

const Contact = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="my-12">
          <h1 className="font-serif text-6xl text-sanJuanBlue w-1/2">
            Submit a help request and we’ll get in touch shortly.
          </h1>
          <div className="flex justify-between my-12">
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
              <PAButtonLink className="text-sanJuanBlue border-sanJuanBlue font-bold px-12">
                Submit
              </PAButtonLink>
            </form>
            <div className="flex flex-col justify-center">
              <h3 className="font-serif text-2xl text-lightSanJuanBlue w-3/4">
                Join the thousands of innovators already building with us
              </h3>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <Tesla fill="#36536B" className="pr-5 py-5" />
                  <Microsoft fill="#36536B" className="px-10 py-5" />
                  <Hewlett fill="#36536B" className="px-10 py-5" />
                </div>
                <div className="flex items-center justify-between">
                  <Oracle fill="#36536B" className="pr-5 py-5" />
                  <Google fill="#36536B" className="px-10 py-5" />
                  <Nvidia fill="#36536B" className="px-10 py-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
