import React, {useState} from 'react';
import productdata from '../Data/Product'
import Load from '../Load/Load';
import { useParams } from 'react-router-dom';
const Product = () => {
    const[data, setData]= useState(productdata);
    const[Food,setFood]=useState("Lunch");
    const newdata = data.filter(data=>data.category==Food);
   
    return (
        
        <div className="container-fluid">
             <button className="btn btn-success item" onClick={()=>setFood("breakfast")}>BreakFast</button>    
   <button className="btn btn-success item" onClick={()=>setFood("Lunch")}>Lunch</button>  
 <button className="btn btn-success item" onClick={()=>setFood("Dinner")}>Dinner</button>  
          <div className="row row-cols-1 row-cols-md-3 g-4">
   {  
       newdata.map(data=><Load data={data}></Load>)
   }
              </div> 
              </div>
    );
};

export default Product;