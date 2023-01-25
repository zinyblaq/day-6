import React from 'react';
import './companypage.css';
import Header from '../header';
import Footer from '../footer';
import HomeFeatures from '../text-image';
import heroimg from './HeroImage.png';
import rest from './rest.png';
import familyimg from './family.png';
import computerimg from './computerwork.png';
import HS from './HS.png';
import BG from './BG.png';
import fineboy from './Fineboy.png';
import FP from './FP.png';
import GOG from './GOG.png';
import line from './Line.png';

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
          // button={<button style={{ opacity: '0' }}>yes</button>}
          image={computerimg}
          isImageRight="true"
        />
      </div>

      <div className="company3">
        <div className="main-company3">
          <div>
            <div className="main-company-text">
              <h1>How we’re doing</h1>
              <p>
                Check out how Flex has been performing over the past decade.
              </p>
            </div>
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
              {/* <img src={shoeimg} alt="shoeimage" className="shoe-image" /> */}
            </div>
            <div className="shoeimage"></div>
            <div className="security">
              <h1>Security</h1>
            </div>
            <div className="flexibiliy">
              <h1>Flexibility</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="company4">
        <div className="company4-text">
          <h1>About Us</h1>
          <p>
            Flex combines great technology, subscription expertise, and a
            customer service ethos to solve real-world problems and is committed
            to becoming the operating system for your subscription business.
          </p>
          <p>
            We provide a complete software platform for managing
            telecommunication services, subscription services and billing
            process.
          </p>
        </div>

        <div className="executives">
          <div className="fp">
            <img src={FP} alt="Jiro Ejobe" />
            <h3>Jiro Ejobe</h3>
            <p>Managing Director (Founder)</p>
          </div>
          <div className="bg">
            <img src={BG} alt="Naomi Saliu–Lawal" />
            <h3>Naomi Saliu–Lawal</h3>
            <p>Co - Founder</p>
          </div>

          <div>
            <img src={fineboy} alt="Tijani Nwadei " />
            <h3>Tijani Nwadei</h3>
            <p>President of Finance</p>
          </div>
          <div>
            <img src={HS} alt="Tunde Salimonu" />
            <h3>Tunde Salimonu</h3>
            <p>President, Global sales</p>
          </div>
          <div className="gog">
            <img src={GOG} alt="Omowunmi Ikazoboh" />
            <h3>Omowunmi Ikazoboh</h3>
            <p>President, Customer success</p>
          </div>
        </div>
      </div>
      <div className="company5">
        <img src={familyimg} alt="family" />
      </div>
      <Footer />
    </div>
  );
}
