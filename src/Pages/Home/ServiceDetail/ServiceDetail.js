import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Form from '../../Contact/Form/Form';
import "./ServiceDetail.css"


const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch("/fakedata.json")
            .then((res) => res.json())
            .then((data) => setDetail(data));
    }, []);

    const selectedData = detail.find(item => item.id == serviceId)
    console.log(selectedData);
    return (
        <div>
            <div className='container '>
                <div className='detail pe-2 mt-5'>
                    <div >
                        <img className='img-details img-fluid max-width: 100%' src={selectedData?.image} alt="" />
                    </div>
                    <div>
                        <h1 className="mt-4 mb-2">{selectedData?.title}</h1>
                        <p className='p-2'>{selectedData?.description}</p>
                    </div>
                </div>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>

    );
};

export default ServiceDetail;