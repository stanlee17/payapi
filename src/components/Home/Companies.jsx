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
    <div className="py-40 bg-mirageBlue text-linkWaterWhite relative max-lg:py-28">
      <div className="container mx-auto px-6 flex justify-between items-center relative max-lg:flex-col-reverse">
        <div className="w-2/5 z-50 max-lg:w-3/4 max-lg:text-center max-lg:mx-auto max-lg:mt-10">
          <h2 className="font-serif text-5xl mb-5 max-sm:text-3xl">
            Who we work with
          </h2>
          <p className="text-neutral-300 mb-5 leading-loose">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <PAButtonLink
            to="/about"
            className="font-bold text-linkWaterWhite border-linkWaterWhite mt-5"
          >
            About Us
          </PAButtonLink>
        </div>
        <div className="grid items-center justify-items-center grid-cols-3 gap-0 h-[10rem] max-sm:grid-cols-2">
          <Tesla fill="#fbfcfe" className="px-10 max-sm:pb-8" />
          <Microsoft fill="#fbfcfe" className="px-10 max-sm:pb-8" />
          <Hewlett fill="#fbfcfe" className="px-10 max-sm:pb-8" />
          <Oracle fill="#fbfcfe" className="px-10 max-sm:pb-8" />
          <Google fill="#fbfcfe" className="px-10 max-sm:pb-8" />
          <Nvidia fill="#fbfcfe" className="px-10 max-sm:pb-8" />
        </div>
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -bottom-20 -left-[25rem] z-0
          max-lg:bottom-96 max-lg:left-0 max-sm:bottom-[30rem]"
        />
      </div>
    </div>
  );
};

export default Companies;
