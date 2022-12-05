const mongoose = require("mongoose");

try {
  mongoose.connect("mongodb://localhost:27017/mentorkartcrud");
  console.log("mongo connected successfully");
} catch (error) {
  console.log(error.message);
}
