import React from "react";
import "./CartDropdown.css";

const CartDropdown = ({ cartItems, onRemove }) => {
  return (
    <div className="cart-dropdown">
      <h4>🛒 Cart Items</h4>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h5>{item.name}</h5>
                <p>₹{item.price}</p>
                <button onClick={() => onRemove(item._id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartDropdown;
