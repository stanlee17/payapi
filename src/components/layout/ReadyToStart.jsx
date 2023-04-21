import React from 'react';
import PAButton from '../common/PAButton';

const ReadyToStart = () => {
  return (
    <div className="bg-linkWaterWhite relative z-50">
      <div className="container mx-auto px-6 flex justify-between my-28 max-lg:flex-col max-lg:text-center max-sm:mt-5">
        <h2 className="font-serif text-5xl text-sanJuanBlue max-lg:mb-10">
          Ready to start?
        </h2>
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
      </div>
    </div>
  );
};

export default ReadyToStart;
