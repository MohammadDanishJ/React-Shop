import React from 'react';
import "./card.styles.scss";
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.webp';
import { MdLocationPin } from 'react-icons/md';

const Card = ({ value }) => {
  return (
    <Link to={`/shop/${value.id}`}>
      <div id={value.id} className="card fl fl-j-fs w100">
        <div className="fl img">
          <img className="img" src={banner} alt="shop banner" />
        </div>
        <div className="fl fl-d-cl fl-j-sb title lhinit w100">
          <div className="title">{value.name}</div>
          <div className="sub-title fl fl-c fl-j-fs">
            <div className="svg fl"><MdLocationPin size={14}/></div>
            <span>{value.location}</span>
          </div>
          <div className="sub-title rate-title">INR {value.rate}</div>
        </div>

        <div className="controller fl fl-c cp">
          <svg viewBox="0 0 19 20" width="19" height="20">
            <path fill="currentColor"
              d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Card;
