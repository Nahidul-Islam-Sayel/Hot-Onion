import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <div className="background container-fluid">
        <input type="submit" value="" className="sarchbar container-fluid"/>
          <Button variant="danger" className="Button container-fluid" >Sarch</Button> 
        </div>
    );
};

export default Home;