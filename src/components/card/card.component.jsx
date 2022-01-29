import React from 'react';
import "./card.styles.scss";
import location from '../../assets/location.svg';

const Card = () => {
  return (
    <div className="card fl fl-j-fs w100">
      <div className="fl img"></div>
      <div className="fl fl-d-cl fl-j-sb title lhinit w100">
        <div className="title">My Shop</div>
        <div className="sub-title fl fl-c fl-j-fs">
          <img src={location} alt="" />
          <span>Location</span>
        </div>
        <div className="sub-title rate-title">INR 110</div>
      </div>
      <div className="controller fl fl-c cp">
        <svg viewBox="0 0 19 20" width="19" height="20">
          <path fill="currentColor"
            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
