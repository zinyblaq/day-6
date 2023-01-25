import React from 'react';
import './text-image.css';
// import Header from '../header';
// import Footer from '../footer';

export default function HomeFeatures({
  text1,
  text2,
  image,
  button,
  classname,
  isImageRight = false,
}) {
  const style = {};
  if (isImageRight) {
    style['flex-direction'] = 'row-reverse';
  } else {
    style['flex-direction'] = 'row';
  }
  return (
    <div className="text-image-1" style={style}>
      <div className="text-image-1-1">
        <h1>{text1}</h1>
        <p>{text2}</p>

        {/* <button className="button">{button}</button> */}
      </div>
      {/* <h1></h1> */}

      <div className="text-image-1-2">
        {/* <div className="landing-1-2"> */}
        <img src={image} alt="" />
        {/* </div> */}
      </div>
      {/* </div> */}
    </div>
  );
}
