import React, { Component } from 'react';
import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div> Cart
      <CartItem imgSrc={"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6da41fa-1be4-4ce5-b89c-22be4f1f02d4/air-force-1-07-shoes-WrLlWX.png"} proName = {"giay abc xyz"} proPrice = {"$12"}/>
    </div>
  )
};

export default Cart