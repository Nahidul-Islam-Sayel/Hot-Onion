import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './load.css';
import { BrowserRouter, Link, Route , Routes} from 'react-router-dom';
const Load = (props) => {
   const{Name , dea  , id , img , category , Price} = props.data;
    
 
    return (
        <div className="col">
        <div className="card">
      
      <div className="card-body">
      <img src={img} className="card-img-top image" alt="..."/>
        <h5 className="card-title">{Name}</h5>
        <p className="card-text">{dea}</p>
        <h4>{Price} Taka</h4>
      <Link to={`/Food/${id}`}>  <button className="btn btn-success">Buy Now</button></Link>
      </div>
    </div>
    </div>
    );
};

export default Load;