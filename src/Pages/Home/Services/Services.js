import React, { } from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const [services] = useServices();

    return (
        <div id="services">
            <div className="container">
                <h1 className="mb-3 service-title">Services</h1>
                <h2 className="mb-2">weCare Eye Services</h2>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => (<Service
                            key={service.id}
                            service={service}
                        ></Service>))
                    }
                </div>
            </div>
        </div>


    );
};

export default Services;