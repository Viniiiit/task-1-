const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide product name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide product description']
  },
  price: {
    type: Number,
    required: [true, 'Please provide product price']
  },
  category: {
    type: String,
    required: [true, 'Please provide product category']
  },
  imageUrl: {
    type: String,
    required: [true, 'Please provide product image']
  },
  stock: {
    type: Number,
    required: [true, 'Please provide product stock'],
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
