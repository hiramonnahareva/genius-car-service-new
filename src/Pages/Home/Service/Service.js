import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, description, _id } = service;
    const navigate = useNavigate()
    const navigateToServicDetail = id => {
      navigate (`/service/${id}`)
    }
    return (
       <div className="col">
            <div className="card">
  <img src={img} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <button onClick={()=>navigateToServicDetail(_id)} className="btn btn-primary">ServiceDetails</button>
  </div>
        </div>
       </div>
    );
};

export default Service;