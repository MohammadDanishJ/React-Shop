import React from 'react';
import './banner.styles.scss';
import banner from '../../assets/banner.webp';

const Banner = ({value}) => {
    return (
        <div className="fl banner prel w100">
            <img src={banner} alt="" className="img" />
            <div className="fallback"></div>
            <div className="pabs t0 w100 h100">
                <div className="w100 h100 fl fl-c fl-d-cl p12">
                    <h1 className="banner-text text-center lhinit">
                        1 Unit&nbsp;<span id="lRate">INR {value.rate}</span>
                    </h1>
                    <p>{value.id} {value.name} {value.location}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
