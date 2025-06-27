import React from "react";
import "./CartDropdown.css";

const CartDropdown = ({ cartItems, onRemove, onIncrease, onDecrease }) => {
  if (!cartItems || cartItems.length === 0) {
    return <div className="cart-dropdown">🛒 Your cart is empty</div>;
  }

  return (
    <div className="cart-dropdown cart-fade-in">
      {cartItems.map((item) => (
        <div key={item._id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <div className="cart-item-details">
            <p className="cart-item-name">{item.name}</p>
            <p className="cart-item-price">₹{item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => onDecrease(item._id)}>-</button>
              <span>{item.quantity || 1}</span>
              <button onClick={() => onIncrease(item._id)}>+</button>
            </div>

            <button className="remove-btn" onClick={() => onRemove(item._id)}>Remove</button>
          </div>
        </div>
      ))}

      <button className="checkout-btn">🧾 Go to Checkout</button>
    </div>
  );
};

export default CartDropdown;
