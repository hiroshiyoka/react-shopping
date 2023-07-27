import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewItems from './Reviews';
import PropTypes from 'prop-types';

function App() {
  return (
    <div className="boxparent">
      <PhotoProduct/>
      <ProductInfo isDiscount="yes" name="Vans SK8-Hi" category="SKATE SHOES"/>
      <ReviewItems  />
    </div>
  );
}

function PhotoProduct() {
  return (
    <div className="photo-product">
      <img src="vansk8hi.png" alt='vans-skate8-hi'/>
    </div>
  );
}

function CheckDiscount(props) {
  const { isDiscount, discount } = props;
  if (isDiscount === "yes") {
    return (
      <p>{discount}% off</p>
    );
  }
  else if (isDiscount === "Coming") {
    return (
      <p>There will be a Discount soon...</p>
    );
  }
  else {
    return (
      <p>There is no discount right now.</p>
    );
  }
}

function ProductInfo(props) {
  const { category, name, isDiscount } = props;
  const benefits = ["Trendy", "Soft", "Very new item"];
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  );
  return (
    <div>
    <div className="description">
      <p className="cate">{category}</p>
      <h1 className="title">{name}</h1>
      <p className="price">IDR 1.250.000</p>
      <CheckDiscount isDiscount={isDiscount} discount={35} />
      <p className="info">
      The Sk8-Hi, Vans legendary lace-up high top inspired by the classic Old Skool, has a durable canvas and suede upper, a supportive and padded ankle, and Vans vulcanized signature Waffle Outsole.
      </p>
      <ul>
        {listBenefits}
      </ul>
      <a onClick={(e) => addCart(name, e)} href="#">Add to Cart</a>
    </div>
    </div>
  );
}

function addCart(e) {
  return console.log("Buying " + e)
}

CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
