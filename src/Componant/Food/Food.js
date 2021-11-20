import React, { useState } from 'react';
import ExtraData from '../Data/ExtraData';
import DataLoad from '../LoadData/DataLoad';
import './Food.css'
const Food = () => {
    const[data,setData]=useState(ExtraData);

    return (
    <div>
        <h1 id="head">Why Choice Us</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
                
        {
      
          data.map(data=><DataLoad data={data}></DataLoad>)
      }
      </div>
      </div>
    );
};

export default Food;