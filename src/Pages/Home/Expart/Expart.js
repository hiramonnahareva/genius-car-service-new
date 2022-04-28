import React from 'react';

const Expart = ({expart}) => {
    const { name, img, description } = expart;
    return (
       <div className="col">
            <div className="card">
  <img src={img} className="card-img-top " alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">{description}</p>
    <button className="btn btn-primary">ServiceDetails</button>
  </div>
        </div>
       </div>
    );
};

export default Expart;