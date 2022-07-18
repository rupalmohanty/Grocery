const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//Below code was removed from the model
/* product: { type: String, required: true },
origin: { type: String, required: true },
price: { type: Number, required: false },
 */

const StoreOrderDetailSchema = new Schema(
  {
    _id: Schema.Types.ObjectId,
    productid: { type: Schema.Types.ObjectId, ref: "Product" },
    skuid: { type: String, required: true },
    product: { type: String, required: true },
    origin: { type: String, required: true },
    price: { type: Number, required: false },
    currQty: { type: Number, required: true, default: 0 },
    newQty: { type: Number, required: true, default: 0 },
    cityQty: { type: Number, required: true, default: 0 },
    datetime: { type: Date, required: true },
    storeName: { type: String, required: true },
    cityName: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const storeOrderDetail =
  mongoose.models.storeOrderDetail ||
  mongoose.model("storeOrderDetail", StoreOrderDetailSchema);

module.exports = storeOrderDetail;
