import React from 'react';
import UseServices from '../Hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = UseServices()
    const hendleDelete = id => {
        const proceed = window.confirm('Are you sure to delete?');
        if (proceed){

            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining);
            });
        }
    }
    return (
        <div>
            <h2>Manage your services</h2>
            {
                services.map(service => <div key={service._id}><h5>{service.name}<button onClick={()=>hendleDelete(service._id)}>X</button></h5></div>)
            }
        </div>
    );
};

export default ManageServices;