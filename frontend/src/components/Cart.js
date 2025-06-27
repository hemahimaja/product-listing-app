import React from "react";

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>🛒 Cart</h2>
    <ul>
      {cart.map((item, index) => (
        <li key={index}>{item.name} - ₹{item.price}</li>
      ))}
    </ul>
  </div>
);

export default Cart;

