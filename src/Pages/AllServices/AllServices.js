import React from 'react';
import Services from '../Home/Services/Services';

const AllServices = () => {
    return (
        <div>
            <div className="mb-5">
                <div style={{ background: `radial-gradient(transparent, black), url('https://templates.hibootstrap.com/opnix/rtl/assets/images/title/2.jpg`, backgroundSize: 'cover', height: "400px", backgroundBlendMode: 'saturation' }}>
                    <div style={{ background: "rgba(255, 255, 255, 0.616)", height: "100%" }} className="text-center d-flex justify-content-center align-items-center">
                        <div className="w-50 px-4 py-3 text-light"><h1>Services</h1></div>
                    </div>
                </div>

            </div>
            <div className="mb-5">
                <Services></Services>
            </div>

        </div>
    );
};

export default AllServices;