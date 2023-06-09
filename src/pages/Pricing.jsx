import React from 'react';
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg';

import Checkmark from '../components/svg/Checkmark';
import PAButtonLink from '../components/common/PAButtonLink';

const Pricing = () => {
  return (
    <div>
      <div className="container mx-auto px-6 my-16 relative max-md:mb-5 max-md:mt-5">
        {/* Circle Background Pattern */}
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -top-[43rem] -right-[18rem] max-sm:-top-[33rem] max-sm:-right-[13rem]"
        />
        <h1 className="font-serif text-6xl mb-2 text-sanJuanBlue max-lg:text-center max-lg:text-5xl relative z-50 max-md:mb-5 max-sm:text-4xl">
          Pricing
        </h1>
        <div className="flex items-center space-x-16 max-lg:text-center max-md:flex-col max-sm:space-x-0 max-sm:space-y-10">
          <div>
            <div className="my-7 max-md:my-5">
              <h3 className="text-darkPink font-serif text-3xl my-5 max-lg:text-2xl">
                Free Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Build and test using our core set of products with up to 100 API
                requests
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue max-lg:text-5xl">
                $0.00
              </h2>
              <div className="border-t border-b border-[#C0CBD5]">
                <ul className="my-8 max-lg:inline-block">
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Transactions
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Auth
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Identity
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Investments
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Assets
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Liabilities
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Income
                  </li>
                </ul>
              </div>
              <PAButtonLink
                to="/"
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8 hover:bg-sanJuanBlue hover:text-linkWaterWhite"
              >
                Request Access
              </PAButtonLink>
            </div>
          </div>
          <div>
            <div className="my-7 max-md:my-5">
              <h3 className="text-darkPink font-serif text-3xl my-5 max-lg:text-2xl">
                Basic Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue max-lg:text-5xl">
                $249.00
              </h2>
              <div className="border-t border-b border-[#C0CBD5]">
                <ul className="my-8 max-lg:inline-block">
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Transactions
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Auth
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Identity
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Investments
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Assets
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Liabilities
                  </li>
                  <li className="mb-4 text-[#92A3B1] flex items-center">
                    <Checkmark color="#fbfcfe" />
                    Income
                  </li>
                </ul>
              </div>
              <PAButtonLink
                to="/"
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8 hover:bg-sanJuanBlue hover:text-linkWaterWhite"
              >
                Request Access
              </PAButtonLink>
            </div>
          </div>
          <div>
            <div className="my-7 max-md:my-5">
              <h3 className="text-darkPink font-serif text-3xl my-5 max-lg:text-2xl">
                Premium Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue max-lg:text-5xl">
                $499.00
              </h2>
              <div className="border-t border-b border-solid border-[#C0CBD5]">
                <ul className="my-8 max-lg:inline-block">
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Transactions
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Auth
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Identity
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Investments
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Assets
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Liabilities
                  </li>
                  <li className="mb-4 text-sanJuanBlue flex items-center">
                    <Checkmark color="#BA4270" />
                    Income
                  </li>
                </ul>
              </div>
              <PAButtonLink
                to="/"
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8 hover:bg-sanJuanBlue hover:text-linkWaterWhite"
              >
                Request Access
              </PAButtonLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
