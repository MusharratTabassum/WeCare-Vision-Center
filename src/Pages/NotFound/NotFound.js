import React from 'react';
import image from './404-Page.jpg'

const NotFound = () => {
    return (
        <div className='p-5'>
            <img className='w-75' src={image} alt="" />
        </div>
    );
};

export default NotFound;