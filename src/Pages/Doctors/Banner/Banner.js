import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="img-fluid" style={{ background: `radial-gradient(transparent, black), url('https://templates.hibootstrap.com/opnix/rtl/assets/images/title/4.jpg`, backgroundSize: 'cover', height: "350px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background: "rgba(255, 255, 255, 0.616)", height: "100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 "><h2 className="title-style">Our Doctors</h2></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;