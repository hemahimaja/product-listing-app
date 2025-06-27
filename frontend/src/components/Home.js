import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Delay the button appearance by 3.5s
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-container">
      <h1 className="typing-animation">
        Welcome to SmartShop, done by Hema Himaja
      </h1>
      {showButton && (
        <button className="shop-button" onClick={() => navigate("/products")}>
          🛍️ Shop Now
        </button>
      )}
    </div>
  );
};

export default HomePage;
