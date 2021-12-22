import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import "./ContactInfo.css";

const ContactInfo = () => {
    const LocationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const EmailIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} />
    const PhoneIcon = <FontAwesomeIcon icon={faPhoneAlt} />

    return (
        <div className='container contact-info-area'>
            <div class="row row-cols-1 row-cols-md-3 g-4">

                <div class="col ">
                    <div className='contact-info'>
                        <div class="card h-100 first-height">
                            <div className='coffee'>
                                {LocationIcon}
                            </div>
                            <div class="card-body">
                                <h3>Location</h3>
                                <p>950 St Johns Pl Brooklyn, NY,
                                    United States</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col">
                    <div className='contact-info'>
                        <div class="card h-100">
                            <div className='coffee'>
                                {EmailIcon}
                            </div>
                            <div class="card-body">
                                <h3>Email Address</h3>
                                <p>hello@wecare.com</p>
                                <p>info@wecare.com</p>
                            </div>
                        </div>


                    </div>

                </div>
                <div class="col">
                    <div className='contact-info'>
                        <div class="card h-100">
                            <div className='coffee'>
                                {PhoneIcon}
                            </div>
                            <div class="card-body">
                                <h3>Phone Number</h3>
                                <p>+8256-569-888</p>
                                <p>+8256-569-887</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default ContactInfo;