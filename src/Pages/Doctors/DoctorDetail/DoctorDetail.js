import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DoctorDetail.css"

const DoctorDetail = () => {
    const { doctorId } = useParams();
    const [doctorDetail, setDoctorDetail] = useState([]);

    useEffect(() => {
        fetch("/doctors.json")
            .then((res) => res.json())
            .then((data) => setDoctorDetail(data));
    }, []);

    const selectedData = doctorDetail.find(item => item.id == doctorId)
    console.log(selectedData);

    return (
        <div className='container'>
            <div className='row d-flex justify-content-center mb-4'>
                <div className=' col-md-6 doctor-detail '>

                    <img className='img-detail img-fluid max-width: 100%' src={selectedData?.image} alt="" />

                    <div className="mt-5">
                        <h1>{selectedData?.name}</h1>
                        <h6>{selectedData?.speciality}</h6>
                        <h6>{selectedData?.qualification}</h6>
                        <h6>{selectedData?.experience}</h6>
                        <h6>{selectedData?.training}</h6>
                        <h6>{selectedData?.position}</h6>
                    </div>

                </div>
            </div>
        </div >
    );
};

export default DoctorDetail;