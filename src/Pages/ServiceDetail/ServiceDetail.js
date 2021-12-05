import React from 'react';
import { useParams } from 'react-router';
const ServiceDetail = (props) => {
    const { serviceId, name } = useParams();
    return (
        <div>
            <h1>{name}</h1>
            <h1>Service details are under working {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;