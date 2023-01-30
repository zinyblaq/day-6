import React from 'react';
import './blogs.css';
import Header from '../header';
import Footer from '../footer';
import dividedimg from './dividedimage.png';
import user from './user.png';
import blog1 from './blog1.png';
import blog2 from './blog2.png';
import blog3 from './blog3.png';
import desc1 from './desc1.png';
import desc2 from './desc2.png';
import desc3 from './desc3.png';
import woman from './Item.png';

export default function Blog() {
  return (
    <div>
      <Header />
      <div className="blog-section1">
        <h1>The news that surrounds us is collected here</h1>
        <p>
          Read watch and absorb the content that we publish in our news blog.
          Also leave comments and communicate with other users.
        </p>
      </div>
      <div className="blog-section2">
        <div className="blog-section2-text">
          <h1>Omdia forecasts cloud gaming to nudge $12bn by 2026</h1>
          <p>
            Subscription services such as Xbox Game Pass Ultimate and
            PlayStation Now will be the primary force driving cloud gaming,
            helping to generate $3.7bn in total in 2021.
          </p>
          <div className="blog-section2-text-1">
            <img src={user} alt="user" />
            <h4>02 Dec</h4>
          </div>
        </div>
        <div>
          <img src={dividedimg} alt="dividedimg" />
        </div>
      </div>
      <div className="blog-section3">
        <img src={blog1} alt="blog1" />
        <img src={blog2} alt="blog2" />
        <img src={blog3} alt="blog3" />
      </div>
      <div className="blog-section4">
        <img src={desc1} alt="desc1" />
        <img src={desc2} alt="desc2" />
        <img src={desc3} alt="desc3" />
      </div>
      <div className="blog-section5">
        <img src={woman} alt="woman" />
      </div>
      <Footer />
    </div>
  );
}
