import React from 'react';
import './partnership.css';
import Header from '../header';
import Footer from '../footer';
import rest from './rest.png';
import letter from './letter.png';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

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
        <form form className="form">
          <div>
            <label>Full Name*</label>
            <input type="text" placeholder="Tope Williams" className="input" />
          </div>
          <div>
            <label>Contact Email*</label>
            <input
              type="text"
              placeholder="you@example.com"
              className="input"
            />
          </div>
          <div>
            <label>Subject*</label>
            <input
              type="text"
              placeholder="enter subject here"
              className="input"
            />
          </div>
          <div>
            <label>Resume*</label>
            <input type="text" placeholder="choose file" className="resume" />
            <button className="btn-choose">Choose file-pdf</button>
          </div>
        </form>
        <div>
          <label>Tell Us About You*</label>
          <input type="text" placeholder="let us know" />
        </div>
        <p>
          By submitting this form you agree to our terms and conditions and our
          Privacy Policy.
        </p>
        <button>
          <img src={letter} alt="letter" /> APPLY NOW
        </button>
      </div>
      <Footer />
    </div>
  );
}
