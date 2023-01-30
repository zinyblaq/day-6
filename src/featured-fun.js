import React from 'react';
import './featured-fun.css';

import icons from './pages/HIWicon2.png';

export default function FeaturedFun({
  image,
  h1,
  p,
  list1,
  list2,
  Imageleft = false,
}) {
  const kelechi = {};

  if (Imageleft) {
    kelechi['flex-direction'] = 'row-reverse';
  } else {
    kelechi['flex-direction'] = 'row';
  }
  return (
    <div className="main-featuredfun" style={kelechi}>
      <div className="background-line">
        <img src={image} alt="yes" />
      </div>
      <div className="featuredfun-text">
        <h1>{h1}</h1>
        <p>{p}</p>
        <ul>
          <li>
            <div className="featuredfun-text-lists">
              <div>
                <img src={icons} alt="icon" />
              </div>
              <h3 className="featured-text-header3">{list1}</h3>
            </div>
          </li>
          <li>
            <div className="featuredfun-text-lists">
              <div>
                <img src={icons} alt="icon" />
              </div>
              <h3 className="featured-text-header3">{list2}</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
