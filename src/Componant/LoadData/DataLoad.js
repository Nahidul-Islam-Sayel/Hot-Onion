import React from 'react';
import './LoadData.css';
const LoadData = (props) => {
const{ Name , Dea , img}=props.data;
    return (
        <div className="col">
        <div className="card">
          <img src={img} className="card-img-top" alt="..." id="vartex"/>
          <div className="card-body">
    <h5 className="card-title">{Name}</h5>
    <p className="card-text">{Dea}</p>
          </div>
        </div>
        </div>
    );
};

export default LoadData;