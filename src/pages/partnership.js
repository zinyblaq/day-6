import React from 'react';
import './partnership.css';
import Header from '../header';
import Footer from '../footer';
import rest from './rest.png';

export default function Partnership() {
  return (
    <div className="partner-main">
      <Header />

      <div className="partner-section1">
        <div className="partner-section1-1">
          <div>
            <h1>Learn more about our partners'</h1>
          </div>
          <div>
            <img src={rest} alt="rest" />
          </div>
        </div>
        <div className="partner-section1-2">
          {/* <img src={heroimg} alt="heroimg" /> */}
        </div>
      </div>
      <div className="partner-section2">
        <h4>Our Partners</h4>
        <div className="partner-section2-1">
          <p className="partner-section2-1-border">
            Let’s help each other grow just like subscriptions, partnerships are
            all about relationships. Join us at Flex today!
          </p>
          <p className="partner-section2-1-paragraph">
            Flex is a fast-growing billing and automation software developer
            with worldwide presence. We offer a complete product stack for
            telecom and digital service providers to maximize revenue and level
            up their customer service.
          </p>
          <h2>“Partner integrations made simple”</h2>
          <p className="partner-section2-1-paragraph">
            Choose the right integrations to drive frictionless workflows and
            long-lasting relationships. We are proud to have acquired the best
            IT engineers and developers for creating market-winning products and
            providing excellent support and service.
          </p>
        </div>

        <h1>Ready to be our partner?</h1>
      </div>
      <div className="partner-section3">
        <form>
          <label>Enter your name:</label>
          <input type="text" placeholder="enter your enail" />
          <input type="text" placeholder="enter your enail" />
          <input type="text" placeholder="enter your enail" />
          <input type="text" placeholder="enter your enail" />
          <input type="text" placeholder="enter your enail" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
