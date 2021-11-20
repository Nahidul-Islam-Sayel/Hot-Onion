import React from 'react';
import { Card , Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import productdata from '../Data/Product'
import './FoodDetails.css'
const FoodDetails = () => {
    const{id} = useParams();
    const newdata = productdata.filter(data=>data.id==id);
    console.log(newdata)
    return (
        <div className="Food">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={newdata[0].img} id="picture" />
        <Card.Body>
          <Card.Title>{newdata[0].Name}</Card.Title>
          <Card.Text>
           {newdata[0].dea}
      <h1>{newdata[0].Price}</h1>     
          </Card.Text>
          <Button variant="primary">Buy Now</Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default FoodDetails;