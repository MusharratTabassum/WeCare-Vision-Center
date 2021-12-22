import React from 'react';

const Banner = () => {
    return (
        <div>
            <div style={{ background: `radial-gradient(transparent, black), url('https://templates.hibootstrap.com/opnix/rtl/assets/images/title/1.jpg') no-repeat top center fixed`, backgroundSize: 'cover', height: "400px", backgroundBlendMode: 'saturation' }}>
                <div style={{ background: "rgba(255, 255, 255, 0.616)", height: "100%" }} className="text-center d-flex justify-content-center align-items-center">
                    <div className="w-50 px-4 py-3 text-light"><h1>About Us</h1></div>
                </div>
            </div>

        </div>
    );
};

export default Banner;