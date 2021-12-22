import React from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    const { id, name, speciality, image } = doctor;

    return (
        <div>
            <div className="col my-5 doctor">
                <div className='doc-img'>
                    <img src={image} className="card-img-top " alt="..." />
                </div>
                <div className='p-3'>
                    <div>
                        <div className="">
                            <h6 className="name">{name}</h6>
                            <p className="text-align">{speciality}</p>
                        </div>
                        <div className="d-flex justify-content-end align-items-center">
                            <Link to={`/doctordetail/${id}`}>
                                <button className="button-style" >+ More Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;