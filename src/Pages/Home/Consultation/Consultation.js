import React from 'react';
import './Consultation.css'

const Consultation = () => {
    return (
        <div className='mt-5 mb-5'>
            <div class="consultation-area area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-title">
                                <h1>Are You Looking For Eye Care Consultation?</h1>
                                <button className="mt-2 ms-4"> Book Appointment</button>

                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="consultation-content">
                                <ul className="d-flex">
                                    <li>
                                        <h2>+0896312478</h2>
                                        <h6>For Emergency Services</h6>
                                    </li>
                                    <li>  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;