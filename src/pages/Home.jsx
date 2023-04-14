import React from 'react';

// Components
import Hero from '../components/Home/Hero';
import Companies from '../components/Home/Companies';
import Product from '../components/Home/Product';
import WhyUs from '../components/Home/WhyUs';

const Home = () => {
  return (
    <div>
      <Hero />
      <Companies />
      <Product />
      <WhyUs />
    </div>
  );
};

export default Home;
