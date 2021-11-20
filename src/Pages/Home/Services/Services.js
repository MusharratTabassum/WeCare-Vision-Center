import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {

    const [services] = useServices();
    return (
        <div className="container">
            <h1>Services</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;