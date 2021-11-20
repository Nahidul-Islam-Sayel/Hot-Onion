import logo from './logo.svg';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Componant/Navbar/Navbar';
import Home from './Componant/Home/Home';
import Product from './Componant/Product/Product';

import Item from './Componant/Item/Item';
import FoodDetails from './Componant/FoodDetails/FoodDetails'
import Food from './Componant/Food/Food';
import Footer from './Componant/Footer/Footer';


function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
    <Switch>
    <Route path="/Food/:id">
      <FoodDetails/>
    </Route>
 

    <Route path="/">

    <Home/>
    <Product/>
    <Food/>
    <Footer/>
    </Route>
        
    
      </Switch>

  </Router>
    </div>
  );
}

export default App;
