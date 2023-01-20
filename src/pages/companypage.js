import React from 'react';
import './companypage.css';
import Header from '../header';
import Footer from '../footer';
import HomeFeatures from '../text-image';
import heroimg from './HeroImage.png';
import familyimg from './family.png';
import computerimg from './computerwork.png';
import shoeimg from './shoes.png';

export default function CompanyPage() {
  return (
    <div>
      <Header />
      <div className="landing">
        <div className="landing-1">
          <div className="landing-1-1">
            <div>
              <h1>Subscription Management Made Easy!</h1>
            </div>
          </div>
          <div className="landing-1-2">
            <HomeFeatures image={heroimg} />
          </div>
        </div>
      </div>
      <div>
        <h1>
          We provide a complete software platform for managing subscription
          services
        </h1>
      </div>
      <div className="landing">
        <div className="landing-1">
          <div className="landing-1-1">
            <div>
              <h1>Subscription Management Made Easy!</h1>
            </div>
          </div>
          <div className="landing-1-2">
            <HomeFeatures image={computerimg} />
          </div>
        </div>
      </div>
      <div>
        <div></div>
        <div>
          <img src={shoeimg} alt="men shoes" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
