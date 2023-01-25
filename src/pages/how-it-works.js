import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './how-it-works.css';
import HomeFeatures from '../text-image';
import handsonlaptop from './HIWhands.png';

export default function HowItWorks() {
  return (
    <div>
      <Header />
      <h1>We Focus on Structured and Sustainable Subscription Management.</h1>
      <div>
        <HomeFeatures
          text1={
            'A Platform you can trust to give you seamless and stress-free experience all day everyday.”'
          }
          text2="You want to know how flex works? We’ve got you.
      Take a quick tour around Flex and see how it works. Sign up to get started!"
          image={handsonlaptop}
        />
      </div>
      <Footer />
    </div>
  );
}
