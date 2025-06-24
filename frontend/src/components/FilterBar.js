import React from "react";

const FilterBar = ({ category, setCategory, products }) => {
  const uniqueCategories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div style={{ margin: "10px" }}>
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {uniqueCategories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
