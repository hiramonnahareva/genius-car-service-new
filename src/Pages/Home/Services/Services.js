import React, { useEffect, useState } from 'react';
import UseServices from '../../../Hooks/UseServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = UseServices () ;
    return (
        <div className='container'>
            <h2 className = 'text-primary my-4 text-center'>Our services</h2>
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
            {
                services.map (service => <Service key={service._id} service= {service}></Service>) 
            }
        </div>
        </div>
    );
};

export default Services;