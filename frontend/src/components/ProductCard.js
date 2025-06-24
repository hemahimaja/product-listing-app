import React from "react";
import "./ProductCard.css"; // We'll style it separately

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img" />
      <div className="card-details">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
        <p className="rating">⭐ {product.rating}</p>
        <small className="category-tag">{product.category}</small>
        <button className="cart-btn">🛒 Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
