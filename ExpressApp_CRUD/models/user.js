var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Product = mongoose.model("users", userSchema);
module.exports = Product;
