import React from 'react';
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg';
import Background from '../assets/about/desktop/image-team-members.jpg';

const About = () => {
  return (
    <div>
      <div className="container mx-auto px-28 my-16 py-10 relative">
        <img
          src={bgCircle}
          alt="bg-circle"
          className="absolute -top-[43rem] -right-[18rem]"
        />
        <h1 className="font-serif text-6xl text-sanJuanBlue mb-20 w-3/5">
          We empower innovators by delivering access to the financial system
        </h1>
        <div className="flex justify-between mb-16">
          <h4 className="font-serif text-3xl text-sanJuanBlue">Our Vision</h4>
          <p className="text-lightSanJuanBlue w-9/12 pl-20">
            Our main goal is to build beautiful consumer experiences along with
            developer-friendly infrastructure. The result is an intelligent tool
            that gives everyone the ability to create amazing products that
            solve big problems. We are deeply focused on democratizing financial
            services through technology.
          </p>
        </div>
        <div className="flex justify-between mb-16">
          <h4 className="font-serif text-3xl text-sanJuanBlue">Our Business</h4>
          <p className="text-lightSanJuanBlue w-9/12 pl-20">
            At the core of our platform is the technical infrastructure APIs
            that connect consumers. Our innovative product provides key insights
            for businesses and individuals, as well as robust reporting for
            traditional financial institutions and developers.
          </p>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${Background})`,
        }}
        className="h-[32rem] bg-no-repeat bg-center bg-cover relative z-50"
      ></div>
      <div className="container mx-auto relative">
        <img
          src={bgCircle}
          alt=""
          className="absolute -bottom-[8rem] -left-[40rem]"
        />
      </div>

      <div className="container mx-auto px-6 flex justify-between mt-20 mb-10">
        <div className="border-y border-solid border-[#C0CBD5] w-1/3 mr-10 my-10">
          <p className="text-lightSanJuanBlue mt-5 mb-2">Team Members</p>
          <h1 className="text-darkPink font-serif text-6xl mb-5">300+</h1>
        </div>
        <div className="border-y border-solid border-[#C0CBD5] w-1/3 mr-10 my-10">
          <p className="text-lightSanJuanBlue mt-5 mb-2">Offices in the US</p>
          <h1 className="text-darkPink font-serif text-6xl mb-5">3</h1>
        </div>
        <div className="border-y border-solid border-[#C0CBD5] w-1/3 my-10">
          <p className="text-lightSanJuanBlue mt-5 mb-2">
            Transactions analyzed
          </p>
          <h1 className="text-darkPink font-serif text-6xl mb-5">10M+</h1>
        </div>
      </div>

      <div className="container mx-auto px-28 pt-10">
        <div className="flex justify-between mb-16">
          <h4 className="font-serif text-3xl text-sanJuanBlue">The Culture</h4>
          <p className="text-lightSanJuanBlue w-9/12 pl-20">
            We strongly believe there's always an opportunity to learn from each
            other outside of day-to-day work, whether it's company-wide
            offsites, internal hackathons, or co-worker meetups. We always value
            cross-team collaboration and diversity of thought, no matter the job
            title.
          </p>
        </div>
        <div className="flex justify-between mb-16">
          <h4 className="font-serif text-3xl text-sanJuanBlue">The People</h4>
          <p className="text-lightSanJuanBlue w-9/12 pl-20">
            We're all passionate about building a more efficient and inclusive
            financial infrastructure together. At PayAPI, we have diverse
            backgrounds and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
