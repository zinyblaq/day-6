import React from 'react';
import './landing-page.css';
import Header from './header';
import Footer from './footer';
import map from './map.png';
import blog from './Blog.svg';
import blackwoman from './girl.jpg';
import partnericon from './partners.png';
import stuttern from './photo@2x.svg';
import edittools from './edit-tools.svg';
import HomeFeatures from './text-image';
// import primevideo from './primeVideo.png';
// import youtube from './image/youtube.png';
// import Header from './header';

export default function LandingPage() {
  return (
    <div>
      <div className="main-landing">
        <Header />
        <div className="landing">
          <div className="landing-1">
            <div className="landing-1-1">
              <HomeFeatures
                text1="Subscription Management Made Easy!"
                text2="Flex is a susbscription management platform that allows you to
                manage multiple susbscription plans. It gives you the freedom to
                control and keep track of your expenses."
              />
              <div className="landing-btn">
                <button className="register-btn">REGISTER</button>
                <button className="login-btn">LOGIN</button>
              </div>
              <div>
                <img
                  src={partnericon}
                  alt="Partners icons"
                  width="518px"
                  height="70px"
                />
              </div>
            </div>
            {/* <h1></h1> */}

            <div className="landing-1-2">
              <HomeFeatures image={blackwoman} />
            </div>
          </div>

          <div className="landing2">
            <div className="landing2-1"></div>
            <div className="landing2-2">
              <h1>Operate on a single platform</h1>
              <p>
                Managing and keeping track of multiple subscriptions could be a
                bit tedious. With Flex, you need not worry about that as all
                subscriptions are easily managed on one platform.
              </p>
            </div>
          </div>

          <div className="landing3">
            <div className="landing3-1">
              <h1>Take your subscription plan to another level</h1>
              <p>
                We provide our esteemed users with so much flexibility with our
                payment platforms. No need to worry about security because we
                have got you covered.
              </p>
            </div>
            <div className="landing3-2"></div>
          </div>
        </div>
      </div>
      <div className="landing4">
        <div className="landing4-1"></div>
        <div className="landing4-2">
          <h1>Our Partners</h1>
          <p>
            We build trust and confidence with our partners by being one of the
            first brands to create a well secured payment platform with some of
            the best companys recognized globally.
          </p>
          <div>
            {/* <button className="register-btn"></button> */}
            <button className="button-primary">BECOME A PARTNER</button>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="landing5-1">
          <h1>Love from customers</h1>
          <p>
            Learn why over 1000 people trust Flex to power their complex billing
            and financial operations.
          </p>
        </div>
        <div className="map">
          <img src={map} alt="map" />
          <div className="map-child">
            <div>
              <img src={stuttern} alt="flower girl" className="flowergirl" />

              <img src={edittools} alt="edittools" className="edittol" />
              <p className="map-paragraph">
                Now I don’t have to worry about missing my favourite shows.
                Thank you Flex.
              </p>
              <h4 className="map-name">- Ann Franks</h4>
            </div>
          </div>
        </div>
        <div className="blog">
          <img src={blog} alt="blog" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
