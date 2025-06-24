import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("❌ Error loading products:", err));
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || p.category === category)
  );

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <FilterBar category={category} setCategory={setCategory} products={products} />
      <div className="product-grid">
        {filtered.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
