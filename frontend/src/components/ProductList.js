// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";
import "./ProductList.css";

const ProductList = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [rating, setRating] = useState(0);
  const [priceSort, setPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://product-listing-app-h56n.onrender.com/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Error fetching products:", err));
  }, []);

  const filtered = products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) &&
        (category === "All" || p.category === category) &&
        p.rating >= rating
    )
    .sort((a, b) =>
      priceSort === 1
        ? a.price - b.price
        : priceSort === -1
        ? b.price - a.price
        : 0
    );

  return (
    <div className="product-page">
      <h2 className="heading">🛒 Product List</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar
        category={category}
        setCategory={setCategory}
        setRating={setRating}
        setPrice={setPrice}
      />
      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

