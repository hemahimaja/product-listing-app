import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartDropdown from "./CartDropdown";
import "./Navbar.css";

const Navbar = ({ cartItems, onRemove }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">🛍️ SmartShop</Link>
      </div>

      <div className="navbar-right">
        <Link to="/products" className="nav-link">Shop</Link>

        <div className="cart-icon" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          🛒
          <span className="badge">{cartItems?.length || 0}</span>
        </div>

        {isDropdownOpen && (
          <CartDropdown cartItems={cartItems} onRemove={onRemove} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
