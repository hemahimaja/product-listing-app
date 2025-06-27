const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ CORS Setup (for local + Netlify)
const allowedOrigins = [
  "http://localhost:3000",
  "https://productlistingandfiltering.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("CORS not allowed for this origin: " + origin));
    }
  }
}));

// ✅ MongoDB Connection
mongoose.connect("mongodb+srv://pallahemahimaja:hemahimaja@cluster0.7ijjcut.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ Routes
app.use("/api/products", productRoutes);

// ✅ Health Check Route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
