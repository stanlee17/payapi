import React from 'react';

// Import images
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import EasyToImplement from '../../assets/home/desktop/illustration-easy-to-implement.svg';
import TotalPayment from '../../assets/home/desktop/illustration-phone-payment-mockup.svg';
import TotalPaymentSuccess from '../../assets/home/desktop/illustration-phone-payment-success-mockup.svg';

const Product = () => {
  return (
    <div>
      <div className="container mx-auto py-16">
        <div className="flex items-center py-48">
          <img
            src={EasyToImplement}
            alt="easy-to-implement"
            className="drop-shadow-primary w-[35rem]"
          />
          <div className="ml-32 max-w-1/3 leading-loose">
            <h2 className="mb-5 font-serif text-5xl text-sanJuanBlue">
              Easy to implement
            </h2>
            <p className="text-lightSanJuanBlue">
              Our API comes with just a few lines of code. You’ll be up and
              running in no time. We built our documentation page to integrate
              payments functionality with ease.
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center relative">
          <div className="max-w-1/3 leading-loose">
            <h2 className="mb-5 font-serif text-5xl text-sanJuanBlue">
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
              className="mr-12 drop-shadow-primary"
            />
            <img
              src={TotalPaymentSuccess}
              alt="easy-to-implement"
              className="drop-shadow-primary z-50"
            />
          </div>
          <img
            src={bgCircle}
            alt="bg-circle"
            className="absolute -right-[35rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
