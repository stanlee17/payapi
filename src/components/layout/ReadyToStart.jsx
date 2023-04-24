import React from 'react';
import PAButton from '../common/PAButton';

const ReadyToStart = () => {
  return (
    <div className="bg-linkWaterWhite relative z-50">
      <div className="container mx-auto px-6 flex justify-between mt-16 mb-24 max-lg:flex-col max-lg:text-center max-md:mt-10">
        <h2 className="font-serif text-5xl text-sanJuanBlue max-lg:mb-10 max-md:text-4xl max-sm:text-3xl">
          Ready to start?
        </h2>
        <form className="drop-shadow-primary max-sm:space-y-5">
          <input
            type="email"
            placeholder="Enter email address"
            className="pl-7 w-80 py-3 rounded-full outline-none focus:ring-0 border-none max-sm:w-full"
          />
          <PAButton className="-ml-10 z-50 relative max-sm:ml-0 max-sm:w-full">
            Schedule a Demo
          </PAButton>
        </form>
      </div>
    </div>
  );
};

export default ReadyToStart;
