import React, { } from 'react';
import './Service.css'

const Service = (props) => {
    const { title, short_description, image } = props.service;

    return (
        <div>
            <div className="col">
                <div className="card box">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h6 className="card-title title">{title}</h6>
                        <p className="card-text">{short_description}</p>
                    </div>
                    <div className="card-footer button-align">
                        <button className="button-style" >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;