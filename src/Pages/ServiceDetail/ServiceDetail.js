import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = "./fakedata.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    return (
        <div>
            <h1>Service details are under working {serviceId}</h1>

        </div>
    );
};

export default ServiceDetail;