import React from 'react';
import logo2 from './logo2.png'
import { Container, Navbar } from 'react-bootstrap';
import './Navbar.css'
import { FaCartPlus } from "react-icons/fa";
const Navbarr = () => {
    return (
  
            <Navbar className="container-fluid">
  <Container>
    <Navbar.Brand className="image"> <img src="https://i.imgur.com/VRrx3iy.png" alt="" srcset=""/>  </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <FaCartPlus/>    
     
      <Navbar.Text>
       <button className="btn btn-success xyz">Log In</button>
      </Navbar.Text>
      <Navbar.Text>
     
       <button className="btn btn-success xyz">Sing Up</button>     
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        
    );
};

export default Navbarr;