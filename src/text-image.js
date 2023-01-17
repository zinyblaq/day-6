import React from 'react';
import './text-image.css';
// import Header from '../header';
// import Footer from '../footer';

export default function HomeFeatures({ text1, text2, image, classname }) {
  return (
    <div className="landing-1">
      <div className="landing-1-1">
        <h1>{text1}</h1>
        <p>{text2}</p>
      </div>
      {/* <h1></h1> */}

      <div className="landing-1-2">
        <div className="landing-1-2">
          <img src={image} alt="" />
        </div>
      </div>
    </div>

    //   <div className="hf-image">
    //     <img src={image} alt="" />
    //   </div>
    // </div>
  );
}
