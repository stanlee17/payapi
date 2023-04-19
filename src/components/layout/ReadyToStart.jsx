import React from 'react';
import PAButton from '../common/PAButton';

const ReadyToStart = () => {
  return (
    <div className="bg-linkWaterWhite relative z-50">
      <div className="container mx-auto flex justify-between my-28">
        <h2 className="font-serif text-5xl text-sanJuanBlue">
          Ready to start?
        </h2>
        <form className="drop-shadow-primary">
          <input
            type="email"
            placeholder="Enter email address"
            className="pl-7 pr-32 py-3 rounded-full outline-none"
          />
          <PAButton className="-ml-10 z-50 relative">Schedule a Demo</PAButton>
        </form>
      </div>
    </div>
  );
};

export default ReadyToStart;
