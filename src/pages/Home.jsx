import React from 'react';
import Hero from '../components/HomePage/Hero';
import LatestCollection from '../components/HomePage/LatestCollection';
import BestSeller from '../components/HomePage/BestSeller';
import OurPolicy from '../components/HomePage/OurPolicy';
import NewsLetterBox from '../components/HomePage/NewsLetterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
