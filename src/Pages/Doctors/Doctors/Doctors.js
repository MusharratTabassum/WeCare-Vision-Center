import React from 'react';
import useDoctors from '../../../Hooks/useDoctors';
import Banner from '../Banner/Banner';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors] = useDoctors();

    return (
        <div>
            <Banner></Banner>
            <div id="services">
                <div className="container mt-4">
                    <h1 className="mb-3 service-title">Doctors</h1>
                    <h2 className="mb-2">WeCare Eye Specialists</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {
                            doctors.map(doctor => (<Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Doctors;