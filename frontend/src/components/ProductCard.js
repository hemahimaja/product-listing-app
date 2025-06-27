import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>⭐ {product.rating}</p>
      <p><span className="category">{product.category}</span></p>
      <button onClick={() => onAddToCart(product)}>🛒 Add to Cart</button>
    </div>
  );
};

export default ProductCard;
