import React from 'react';
import './text-image.css';
// import Header from '../header';
// import Footer from '../footer';
export default function HomeFeatures(text, image) {
  const Text = text.text;
  const Image = image.image;
  return (
    <div className="landing-1">
      <div className="landing-text">
        {/* <h1>Subscription Management Made Easy!</h1> */}
        <p>{Text} </p>
      </div>

      <div className="landing-image">
        <img src={Image} alt="yes" />
        {/* <img src={blackwoman} alt="blackwoman" /> */}
      </div>
    </div>
  );
}
