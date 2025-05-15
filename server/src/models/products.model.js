const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelProduct = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    priceDiscount: { type: Number, required: true },
    images: { type: Array, required: true },
    stock: { type: Number, required: true },
    category: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      required: true
    },
    description: { type: String },
    slug: { 
      type: String, 
      required: true,
      unique: true 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    },
    specifications: {
      cpu: { type: String, required: true },
      screen: { type: String, required: true },
      gpu: { type: String, required: true },
      storage: { type: String, required: true },
      screenHz: { type: String, required: true },
      ram: { type: String, required: true },
      battery: { type: String, required: true },
      camera: { type: String, required: true },
      weight: { type: String, required: true },
    }
  },
  {
    timestamps: true,
  }
);

// Create index for better search performance
modelProduct.index({ name: 'text', slug: 'text' });

module.exports = mongoose.model("product", modelProduct);
