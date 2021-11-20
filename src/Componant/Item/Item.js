import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css'
const Item = () => {
  return (
    <div className="container-fluid">
  <Link to="/Item/breakfast"><button className="btn btn-success item">BreakFast</button></Link>    
   <Link to="/Item/Lunch"><button className="btn btn-success item">Lunch</button></Link>   
 <Link to="/Item/Dinner"><button className="btn btn-success item">Dinner</button></Link>     
    </div>
  );
};

export default Item;