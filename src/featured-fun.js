import React from 'react';
import './featured-fun.css';
import blackwoman from './pages/HIWlaptop.png';
import icons from './pages/HIWicon2.png';

export default function FeaturedFun(image, h1, p, lists) {
  return (
    <div className="main-featuredfun">
      <div className="background-line">
        <img src={blackwoman} alt="yes" />
      </div>
      <div className="featuredfun-text">
        <h1>Our Featured Functionalities</h1>
        <p>Here’re some of the features Flex has to offer.</p>
        <ul>
          <li>
            <div className="featuredfun-text-lists">
              <div>
                <img src={icons} alt="icon" />
              </div>
              <h3 className="featured-text-header3">
                Marketing tools & Discounts and promos
              </h3>
            </div>
          </li>
          <li>
            <div className="featuredfun-text-lists">
              <div>
                <img src={icons} alt="icon" />
              </div>
              <h3 className="featured-text-header3">
                Marketing tools & Discounts and promos
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
