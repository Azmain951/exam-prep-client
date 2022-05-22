import React from 'react';
import notFound from '../../img/notFound.jpg'

const NotFound = () => {
    return (
        <div className='d-flex align-items-center justify-content-center'>
            <img src={notFound} alt="" className='img-fluid' />
        </div>
    );
};

export default NotFound;