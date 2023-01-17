import React from 'react';
import './companypage.css';
import Header from '../header';
import Footer from '../footer';
import HomeFeatures from '../text-image';
import heroimg from './HeroImage.png';

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
      <Footer />
    </div>
  );
}
