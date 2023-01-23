import React from 'react';
import './companypage.css';
import Header from '../header';
import Footer from '../footer';
import HomeFeatures from '../text-image';
import heroimg from './HeroImage.png';
import rest from './rest.png';
import familyimg from './family.png';
import computerimg from './computerwork.png';
import shoeimg from './shoes.png';

export default function CompanyPage() {
  return (
    <div>
      <Header />
      <div className="landing">
        <div className="section-1">
          <div className="section-1-1">
            <div>
              <h1>Learn more about us at Flex'</h1>
              <p>
                For over 10 years, Flex has enabled thousands of businesses to
                manage the recurring revenue lifecycle. Our vision is to become
                recognized by our customers as the indispensable system for
                running a subscription business.
              </p>
            </div>
            <div>
              <img src={rest} alt="rest" />
            </div>
          </div>
          <div className="section-1-2">
            {/* <img src={heroimg} alt="heroimg" /> */}
          </div>
        </div>
        <div className="section-1-3">
          <h1>
            We provide a complete software platform for managing subscription
            services
          </h1>
        </div>
      </div>
      <div className="section2">
        <HomeFeatures
          text1={
            <p
              style={{
                color: '#030640',
                width: '493px',
                height: '131px',
                // lineHeight: '30px',
                fontWeight: '500',
                letterSpacing: '-0.01em',
              }}
            >
              We are experts in our field and are able to transform and provide
              subscription services , integrated payment methods and wide range
              of subscription management.
            </p>
          }
          text2={
            <p
              style={{
                // color: '#030640',
                fontWeight: '400',
                // width: '493px',
                height: '131px',
                lineHeight: '28px',
                fontSize: '18px',
                letterSpacing: '-0.01em',
                marginTop: '40px',
              }}
            >
              Over the past decade, Flex has expanded its offerings to address
              the complexities of Recurring billing and Subscription Management.{' '}
            </p>
          }
          image={computerimg}
          isImageRight="true"
        />
      </div>

      <div className="company3">
        <div className="main-company3">
          <div className="main-company-text">
            <h1>How we’re doing</h1>
            <p>Check out how Flex has been performing over the past decade.</p>
            <div className="dates">
              <div>
                <h1>10</h1>
                <p>Years of Experience</p>
              </div>
              <div>
                <h1>27</h1>
                <p>partners</p>
              </div>
              <div>
                <h1>20</h1>
                <p>Smart Working People</p>
              </div>
              <div>
                <h1>40k+</h1>
                <p>Subscriptions under management</p>
              </div>
            </div>
          </div>
          <div className="company3-img">
            <div className="shoeimage-container">
              <div className="shoeimage"></div>
              {/* <img src={shoeimg} alt="shoeimage" className="shoe-image" /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
