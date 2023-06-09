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
    <div className="py-40 bg-mirageBlue text-linkWaterWhite relative max-lg:py-32">
      <div className="container mx-auto px-6 flex justify-between items-center relative max-lg:flex-col-reverse">
        <div className="w-2/5 z-50 space-y-6 max-lg:w-3/4 max-lg:text-center max-lg:mx-auto max-lg:mt-12 max-sm:mt-20">
          <h2 className="font-serif text-5xl max-sm:text-3xl">
            Who we work with
          </h2>
          <p className="text-neutral-300 leading-loose">
            Today, millions of people around the world have successfully
            connected their accounts to apps they love using our API. We provide
            developers with the tools they need to create easy and accessible
            experiences for their users.
          </p>
          <PAButtonLink
            to="/about"
            className="font-bold text-linkWaterWhite border-linkWaterWhite hover:bg-linkWaterWhite hover:text-mirageBlue"
          >
            About Us
          </PAButtonLink>
        </div>
        <div className="grid items-center justify-items-center grid-cols-3 gap-0 h-[10rem] z-50 max-sm:grid-cols-2">
          <Tesla fill="#fbfcfe" className="px-10 max-sm:pb-10" />
          <Microsoft fill="#fbfcfe" className="px-10 max-sm:pb-10" />
          <Hewlett fill="#fbfcfe" className="px-10 max-sm:pb-10" />
          <Oracle fill="#fbfcfe" className="px-10 max-sm:pb-10" />
          <Google fill="#fbfcfe" className="px-10 max-sm:pb-10" />
          <Nvidia fill="#fbfcfe" className="px-10 max-sm:pb-10" />
        </div>
        {/* Circle Background Pattern */}
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -bottom-20 -left-[25rem]
          max-lg:bottom-96 max-lg:left-0 max-sm:min-w-[50rem] max-sm:-left-[10rem] max-sm:bottom-[30rem]"
        />
      </div>
    </div>
  );
};

export default Companies;
