const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});
productSchema.index({ name: 'text', description: 'text' });

module.exports = mongoose.model('Product', ProductSchema);
