const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Below code was removed from the model
/*
 product: { type: String, required: true },
    origin: { type: String, required: true },
    price: { type: Number, required: false },
 */

const StoreOrderSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    productid: { type: Schema.Types.ObjectId, ref: "Product" },
    orSkuid: { type: String, required: true },
    currQty: { type: Number, required: true },
    newQty: { type: Number, required: true },
    appQty: { type: Number, required: true },
    submitStatus: { type: String, required: true },
    submitDatetime: { type: Date, required: true },
    storeName: { type: String, required: true },
    storeLocation: { type: String, required: true },
    cityLocation: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const storeOrder =
  mongoose.models.storeOrder || mongoose.model("storeOrder", StoreOrderSchema);

module.exports = storeOrder;
