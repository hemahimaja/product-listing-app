// src/components/FilterBar.js
import React from "react";
import "./FilterBar.css";

const FilterBar = ({ category, setCategory, setRating, setPrice }) => {
  return (
    <div className="filter-bar">
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Footwear">Footwear</option>
        <option value="Accessories">Accessories</option>
      </select>

      <select onChange={(e) => setRating(Number(e.target.value))}>
        <option value="0">All Ratings</option>
        <option value="4.5">4.5 ★ & above</option>
        <option value="4">4 ★ & above</option>
        <option value="3.5">3.5 ★ & above</option>
      </select>

      <select onChange={(e) => setPrice(Number(e.target.value))}>
        <option value="0">Sort by Price</option>
        <option value="1">Low to High</option>
        <option value="-1">High to Low</option>
      </select>
    </div>
  );
};

export default FilterBar;
