import React from 'react';
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg';

import Checkmark from '../components/svg/Checkmark';
import PAButtonLink from '../components/common/PAButtonLink';

const Pricing = () => {
  return (
    <div>
      <div className="container mx-auto px-6 my-16 relative">
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -top-[43rem] -right-[18rem]"
        />
        <h1 className="font-serif text-6xl mb-5 text-sanJuanBlue py-5">
          Pricing
        </h1>
        <div className="flex">
          <div className="mr-16">
            <div className="my-7">
              <h3 className="text-darkPink font-serif text-3xl my-5">
                Free Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Build and test using our core set of products with up to 100 API
                requests
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue">
                $0.00
              </h2>
              <div className="border-t border-b border-[#C0CBD5]">
                <ul className="my-8">
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
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8"
              >
                Request Access
              </PAButtonLink>
            </div>
          </div>
          <div className="mr-16">
            <div className="my-7">
              <h3 className="text-darkPink font-serif text-3xl my-5">
                Basic Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue">
                $249.00
              </h2>
              <div className="border-t border-b border-[#C0CBD5]">
                <ul className="my-8">
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
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8"
              >
                Request Access
              </PAButtonLink>
            </div>
          </div>
          <div>
            <div className="my-7">
              <h3 className="text-darkPink font-serif text-3xl my-5">
                Premium Plan
              </h3>
              <p className="text-lightSanJuanBlue leading-loose">
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
            </div>
            <div>
              <h2 className="font-serif text-6xl mb-8 text-sanJuanBlue">
                $499.00
              </h2>
              <div className="border-t border-b border-solid border-[#C0CBD5]">
                <ul className="my-8">
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
                className="font-bold border-sanJuanBlue text-sanJuanBlue mt-8"
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
