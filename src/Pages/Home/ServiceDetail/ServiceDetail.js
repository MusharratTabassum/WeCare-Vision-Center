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
            <div className='container'>
                <div className='detail'>
                    <div >
                        <img className='img-detail' src={selectedData?.image} alt="" />
                    </div>
                    <div>
                        <h1>{selectedData?.title}</h1>
                        <p>{selectedData?.description}</p>
                    </div>
                </div>


                <div>
                    <h2>Why choose WeCare for {selectedData?.title}  ?</h2>
                </div>
            </div>
            <div>
                <Form></Form>
            </div>
        </div>

    );
};

export default ServiceDetail;