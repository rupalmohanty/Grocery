const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    skuid: { type: String, required: true },
    product: { type: String, required: true },
    origin: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, required: true },
    datetime: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
module.exports = Product;
