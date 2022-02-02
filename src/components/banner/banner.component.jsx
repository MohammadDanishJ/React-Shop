import React from 'react';
import './banner.styles.scss';
import banner from '../../assets/banner.webp';

const Banner = ({ value, isLoading = true }) => {
    return (
        <div className="fl banner prel w100">
            <img src={banner} alt="" className="img" />
            <div className="fallback"></div>
            <div className="pabs t0 w100 h100">
                <div className="w100 h100 fl fl-c fl-d-cl p12">
                    <h1 className="banner-text text-center lhinit">
                        1 Unit&nbsp;<span id="lRate">INR {!isLoading ? value.rate : 'Loading'}</span>
                    </h1>
                    <div className='data'>{!isLoading ? `${value.name} | ${value.location}` : 'Loading'}</div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
