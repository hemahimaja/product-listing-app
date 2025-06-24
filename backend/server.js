const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();

// ✅ CORS setup to allow only Netlify frontend
app.use(cors({
  origin: "https://productlistingandfiltering.netlify.app"
}));

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect("mongodb+srv://pallahemahimaja:hemahimaja@cluster0.7ijjcut.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"));

// ✅ API Routes
app.use("/api/products", productRoutes);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
