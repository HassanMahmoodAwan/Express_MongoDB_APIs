var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
    Price: String,
    Quantity: String,
    productName: String,
});

const Product = mongoose.model('products', productSchema);
module.exports = Product;