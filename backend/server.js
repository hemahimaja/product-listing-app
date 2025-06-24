const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://pallahemahimaja:hemahimaja@cluster0.7ijjcut.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB connected"));

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running...");
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
