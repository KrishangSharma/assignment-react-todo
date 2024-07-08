// Package Imports
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv").config();
const { connectDB } = require("./config/db.config");
const todoRoutes = require("./routes/todoRoutes");

// Initalize the app
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => res.send("Server Working!"));

// App Routes
app.use("/todo", todoRoutes);

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server running at: http://localhost:${port}`);
  connectDB(process.env.MONGO_URI);
});
