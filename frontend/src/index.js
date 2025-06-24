import React from "react";
import ReactDOM from "react-dom/client"; // ✅ use new API
import App from "./App";

console.log("⚡ index.js started");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
