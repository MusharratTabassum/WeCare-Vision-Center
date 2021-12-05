import React from 'react';
import "./Testimonial.css";


const Testimonial = (props) => {
    const { name, occupassion, review, image } = props.testimonial;
    return (
        <div>
            <div className="review-card ">
                <div className="upper-part d-flex justify-content-end">
                    <div className="header-part">
                        <h3>{name}</h3>
                        <p>{occupassion}</p>
                    </div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="review-part">
                    <p>{review}</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;