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

  useEffect(() => {
    console.log("🔄 Fetching products from backend...");
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log("✅ Products loaded:", res.data);
      })
      .catch((err) => {
        console.error("❌ Error fetching products:", err);
      });
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );

  return (
    <div className="product-page">
      <h2 className="heading">🛒 Product List</h2>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar category={category} setCategory={setCategory} products={products} />
      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
