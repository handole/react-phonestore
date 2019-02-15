import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../logo.svg';
import {ButtonContainer} from './Button';
import styled from 'styled-components' ;

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5"> 
        <div className="container">
          {/* 
          https://www.iconfinder.com/icons/1243689/call_phone_icon
              Creative Commons (Attribution 3.0 Unported);
              https://www.iconfinder.com/Makoto_msk
          */}
          <Link to="/">
            <img src={logo} alt="store" className="navbar-brand" />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link">
                Products
              </Link>
            </li>  
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
              <i className="fas fa-cart-plus" />
              </span> my cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper> 
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important; 
  }
`;


// posisi di 1:18:32 