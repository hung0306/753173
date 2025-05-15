const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    name: { 
      type: String, 
      required: true,
      unique: true 
    },
    description: { 
      type: String 
    },
    slug: { 
      type: String, 
      required: true,
      unique: true 
    },
    image: {
      type: String
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'category',
      default: null
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

// Create index for better search performance
categorySchema.index({ name: 'text', slug: 'text' });

module.exports = mongoose.model("category", categorySchema); 