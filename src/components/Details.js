import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text slanted text-blue my-5">
                  <h1>{title}</h1>
                  
                </div>
              </div>
              {/* end title */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                 <img src={img} className="img-fluid" alt="product" /> 
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3">
                 <h2>Model : {title}</h2>
                 <h4 className="text-tiel text-uppercase text-muted mt-3 mb-2">
                   made by : <span className="text-upperca">{company}</span>
                 </h4>
                 <h4 className="text-blue">
                   <strong>price : <span>$</span> {price}</strong>
                 </h4>
                 <p className="textcapitalize font-weight-bold mt-3 mb-0">
                   some info about product:
                 </p>
                 <p className="text-muted lead">{info}</p>
                 <div>
                   {/* button */}
                   <Link to='/'>
                     <ButtonContainer>
                       back to product
                     </ButtonContainer>
                   </Link>
                   <ButtonContainer cart disabled={inCart?true:false}
                     onClick={() => {
                       value.addToCart(id);
                       value.openModal(id);
                     }}> {inCart ? "inCart" : "add to cart"}
                   </ButtonContainer>
                   {/* <button className="cart-btn" disabled={inCart ? true : false} onClick={() => {
                       console.log("added to the cart");
                       }}>
                         {inCart ? (
                          <p className="text-capitazed mb-0" disabled>{" "}in cart</p>
                       ) : (
                          <i className=""></i>)
                   </button> */}
                   {/* card footerbackt to products */}
                   {/* <div className="card-footer d-flex justify-content-between">
                     <p className="align-self-center mb-0">{title}</p>
                     <h5 className="text-blue font-italic mb-0">
                    <span className="mr-1">$</span> {price}
                     </h5>
                   </div> */}
                 </div>
                </div>
              </div>
            </div>
          ); 
        }}
      </ProductConsumer>
    );
  }
}

export default Details;

// 3:00:00