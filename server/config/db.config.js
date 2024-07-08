const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { connectDB };
