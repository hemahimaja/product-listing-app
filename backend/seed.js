const mongoose = require('mongoose');
const Product = require('./models/Product');

const mongoURI = 'mongodb+srv://pallahemahimaja:hemahimaja@cluster0.7ijjcut.mongodb.net/productDB?retryWrites=true&w=majority&appName=Cluster0';

const products = [
  {
    name: "Smartphone Pro X",
    price: 19999,
    rating: 4.5,
    category: "Electronics",
    image: "/images/phone.jpeg"
  },
  {
    name: "Stylish Backpack",
    price: 899,
    rating: 4.2,
    category: "Accessories",
    image: "/images/bag.jpeg"
  },
  {
    name: "Running Shoes",
    price: 1299,
    rating: 4.1,
    category: "Footwear",
    image: "/images/shoes.jpeg"
  },
  {
    name: "Wired Earphones",
    price: 399,
    rating: 4.0,
    category: "Electronics",
    image: "/images/earphones.jpeg"
  },
  {
    name: "Ladies Handbag",
    price: 1499,
    rating: 4.3,
    category: "Accessories",
    image: "/images/handbag.jpeg"
  },
  {
    name: "Sports Watch",
    price: 1799,
    rating: 4.4,
    category: "Accessories",
    image: "/images/watch.jpeg"
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ Connected to MongoDB");

    await Product.deleteMany();
    console.log("🗑 Cleared existing products");

    await Product.insertMany(products);
    console.log("🌱 Products inserted successfully!");

    mongoose.disconnect();
    console.log("🔌 Disconnected from MongoDB");
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    mongoose.disconnect();
  }
};

seedProducts();
