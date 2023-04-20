import React from 'react';

// Import images
import Finance from '../../assets/home/desktop/icon-personal-finances.svg';
import Banking from '../../assets/home/desktop/icon-banking-and-coverage.svg';
import Payments from '../../assets/home/desktop/icon-consumer-payments.svg';

const WhyUs = () => {
  return (
    <div>
      <div className="container mx-auto px-6 my-28 flex leading-loose max-sm:flex-col">
        <div className="flex flex-col items-center text-center mr-16 max-lg:mr-8 max-sm:mr-0 max-sm:mb-16">
          <img src={Finance} alt="personal-finances" className="mb-8" />
          <h4 className="mb-3 font-bold text-lg text-sanJuanBlue">
            Personal Finances
          </h4>
          <p className="text-lightSanJuanBlue">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.
          </p>
        </div>
        <div className="flex flex-col items-center text-center mr-16 max-lg:mr-8 max-sm:mr-0 max-sm:mb-16">
          <img src={Banking} alt="banking-coverage" className="mb-8" />
          <h4 className="mb-3 font-bold text-lg text-sanJuanBlue">
            Banking & Coverage
          </h4>
          <p className="text-lightSanJuanBlue">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div className="flex flex-col items-center text-center max-sm:mr-0">
          <img src={Payments} alt="consumer-payments" className="mb-8" />
          <h4 className="mb-3 font-bold text-lg text-sanJuanBlue">
            Consumer Payments
          </h4>
          <p className="text-lightSanJuanBlue">
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
