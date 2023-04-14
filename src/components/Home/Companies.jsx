import React from 'react';
import PAButtonLink from '../common/PAButtonLink';
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';

// Image Imports
import Tesla from '../svg/Tesla';
import Microsoft from '../svg/Microsoft';
import Hewlett from '../svg/Hewlett';
import Oracle from '../svg/Oracle';
import Google from '../svg/Google';
import Nvidia from '../svg/Nvidia';

const Companies = () => {
  return (
    <div className="py-40 bg-mirageBlue text-linkWaterWhite relative">
      <div className="container mx-auto flex justify-between relative">
        <div className="max-w-2/5 z-50">
          <h2 className="font-serif text-5xl mb-5">Who we work with</h2>
          <p className="text-neutral-300 mb-5 leading-loose">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <PAButtonLink
            to="/about"
            color="linkWaterWhite"
            className="font-bold"
          >
            About Us
          </PAButtonLink>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex items-center">
            <Tesla fill="#fbfcfe" className="px-10 py-5" />
            <Microsoft fill="#fbfcfe" className="px-10 py-5" />
            <Hewlett fill="#fbfcfe" className="px-10 py-5" />
          </div>
          <div className="flex items-center justify-between">
            <Oracle fill="#fbfcfe" className="px-10 py-5" />
            <Google fill="#fbfcfe" className="px-10 py-5" />
            <Nvidia fill="#fbfcfe" className="px-10 py-5" />
          </div>
        </div>
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -bottom-20 -left-[25rem] z-0"
        />
      </div>
    </div>
  );
};

export default Companies;
