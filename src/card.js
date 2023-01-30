import React from 'react';
import './card.css';
import cardicon from './pages/HIWicons.png';

export default function Card({ h2, p }) {
  return (
    <div className="main-container">
      <div className="card-container">
        <img src={cardicon} alt="cardicon" />
        <h2>{h2}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
}
