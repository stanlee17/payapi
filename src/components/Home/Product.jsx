import React from 'react';

// Import images
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import EasyToImplement from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import TotalPayment from '../../assets/home/desktop/illustration-phone-payment-mockup.svg';
import TotalPaymentSuccess from '../../assets/home/desktop/illustration-phone-payment-success-mockup.svg';

const Product = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-16">
        <div className="flex items-center py-48 max-lg:py-36 max-lg:flex-col">
          <img
            src={EasyToImplement}
            alt="easy-to-implement"
            className="drop-shadow-primary w-[35rem] max-lg:w-[30rem]"
          />
          <div className="ml-32 w-1/3 leading-loose max-lg:w-10/12 max-lg:ml-0 max-lg:text-center">
            <h2 className="mb-5 font-serif text-5xl text-sanJuanBlue max-lg:mt-10">
              Easy to implement
            </h2>
            <p className="text-lightSanJuanBlue">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center relative max-lg:flex-col-reverse">
          <div className="w-1/3 leading-loose max-lg:w-10/12 max-lg:text-center">
            <h2 className="mb-5 font-serif text-5xl text-sanJuanBlue max-lg:mt-16">
              Simple UI & UX
            </h2>
            <p className="text-lightSanJuanBlue">
              Our pre-built form is easy to integrate in your app or website’s
              checkout flow and designed to optimize conversion.
            </p>
          </div>
          <div className="flex">
            <img
              src={TotalPayment}
              alt="easy-to-implement"
              className="mr-8 drop-shadow-primary max-lg:w-[12rem] max-sm:w-[9rem]"
            />
            <img
              src={TotalPaymentSuccess}
              alt="easy-to-implement"
              className="drop-shadow-primary z-50 max-lg:w-[12rem] max-sm:w-[9rem]"
            />
          </div>
          <img
            src={bgCircle}
            alt="bg-circle"
            className="absolute -right-[35rem] max-lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
