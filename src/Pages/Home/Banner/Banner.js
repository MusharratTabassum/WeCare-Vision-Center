import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-area mb-5'>
            <div className='banner-item banner-bg-one'>
                <div className="container banner-section-title">
                    <p className="banner-title">Critical Care Center</p>
                    <h2  >Eye Care Specialist Services That You Can Trust</h2>
                    <div className="button-align">
                        <Link to="/about"><button>More About Us</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;