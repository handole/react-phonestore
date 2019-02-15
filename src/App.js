import React, { Component } from 'react';
// import reactDOM from 'react-dom';  
import './index.css'; 
import { Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './components/Navbar';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from "./components/Modal";

// import  from './components/';
// import List from './List';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />

      </React.Fragment>
    );
  }
}

