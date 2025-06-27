import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item._id === product._id);
    if (!exists) {
      setCartItems((prev) => [...prev, product]); // add only if not already in cart
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <Router>
      <Navbar cartItems={cartItems} onRemove={handleRemoveFromCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductList onAddToCart={handleAddToCart} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
