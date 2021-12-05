import React from 'react';
import Banner from './Banner/Banner';
import Consultation from './Consultation/Consultation';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Consultation></Consultation>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;