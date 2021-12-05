import React from 'react';
import useTestimonial from '../../../Hooks/useTestimonial';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const [testimonials] = useTestimonial();
    return (
        <div>
            <div className="container">
                <h1 className="mb-3 service-title">Testimonials</h1>
                <h2 className="mb-2">What Our Patients Say About Us</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        testimonials.map(testimonial => (<Testimonial
                            key={testimonial.id}
                            testimonial={testimonial}
                        ></Testimonial>))
                    }
                </div>
            </div>

        </div>
    );
};

export default Testimonials;