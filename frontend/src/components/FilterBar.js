import React from "react";

const FilterBar = ({ category, setCategory, rating, setRating, priceRange, setPriceRange }) => {
  return (
    <div className="filter-bar">
      <select onChange={(e) => setCategory(e.target.value)} value={category}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Accessories">Accessories</option>
        <option value="Footwear">Footwear</option>
      </select>

      <select onChange={(e) => setRating(e.target.value)} value={rating}>
        <option value="0">All Ratings</option>
        <option value="4">4★ & above</option>
        <option value="3">3★ & above</option>
      </select>

      <select onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
        <option value="All">All Prices</option>
        <option value="0-999">Below ₹1000</option>
        <option value="1000-1999">₹1000 - ₹1999</option>
        <option value="2000">Above ₹2000</option>
      </select>
    </div>
  );
};

export default FilterBar;
