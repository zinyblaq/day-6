import React from 'react';
import Header from '../header';
import Footer from '../footer';
import './how-it-works.css';
import HomeFeatures from '../text-image';
import handsonlaptop from './HIWhands.png';
import FeaturedFun from '../featured-fun';
import laptop from './HIWlaptop.png';
import Card from '../card';

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
      <div className="HIW-section2">
        <FeaturedFun
          image={laptop}
          h1="Our Featured Functionalities"
          p="Here’re some of the features Flex has
          to offer."
          list1={`Marketing tools & Discounts and promos`}
          list2={`Flexible charging schemes`}
        />
      </div>
      <div className="HIW-section3">
        <FeaturedFun
          image={laptop}
          h1="Our Featured Functionalities"
          p="Here’re some of the features Flex has
          to offer."
          list1={
            // <h3 style={{ width: '346' }}>
            `Managing telecommunication services.`
            // </h3>
          }
          list2={`Managing subscription
          services.`}
          Imageleft="true"
        />
      </div>
      <div className="HIW-section4">
        <h2>A few reasons why you should join us!!!</h2>
        <div className="HIW-section4-card">
          <Card
            h2="Collaboration"
            p="Collaboration is the process of two or more people or organizations working together to complete a task or achieve a goal."
          />
          <Card
            h2="Transparency"
            p="Transparency, as used in science is operating in such a way that it is easy for others to see what actions are performed."
          />
          <Card
            h2="Trust"
            p="Trust will help us foster a positive and productive environment that delivers value to our users and customers."
          />
          <Card
            h2="Integrity"
            p="Integrity is the practice of showing a consistent and uncompromising adherence to strong moral and ethical principles."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
