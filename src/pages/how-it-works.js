import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './how-it-works.css';
import HomeFeatures from '../text-image';
import handsonlaptop from './HIWhands.png';
import FeaturedFun from '../featured-fun';

export default function HowItWorks() {
  return (
    <div>
      <Header />
      <div className="HIW-main-section">
        <h1 className="firstheader">
          We Focus on Structured and Sustainable Subscription Management.
        </h1>
        <div className="HIW-border"></div>
      </div>
      <div className="HIW-section1">
        <HomeFeatures
          text1={
            <p
              style={{
                color: '#030640',
                width: '493px',
                height: '131px',
                fontSize: '28px',
                // lineHeight: '30px',
                fontWeight: '500',
                lineHeight: '56px',
                letterSpacing: '-0.01em',
              }}
            >
              'A Platform you can trust to give you seamless and stress-free
              experience all day everyday.'
            </p>
          }
          text2={
            <p
              style={{
                color: 'rgba(51, 51, 51, 0.9)',
                width: '490px',
                height: '86px',
                fontSize: '18px',
                // lineHeight: '30px',
                fontWeight: '400',
                lineHeight: '28px',
                marginTop: '60px',
              }}
            >
              `You want to know how flex works? We’ve got you. Take a quick tour
              around Flex and see how it works. Sign up to get started!`
            </p>
          }
          image={handsonlaptop}
        />
        <button className="button">WATCH VIDEO </button>
      </div>
      <div>
        <FeaturedFun />
      </div>
      <Footer />
    </div>
  );
}
