import React from "react";

const SearchBar = ({ search, setSearch }) => (
  <input
    type="text"
    placeholder="Search products..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
);

export default SearchBar;
