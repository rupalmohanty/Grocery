const router = require("express").Router();
const StoreOrder = require("../models/storeOrder.model");
//const Product = require("../models/Product.model");

/* In the StoreOrder from we get the product list from the Products 
collection in the MongoDb database. 
After the Qty is filled, the data is stored back to the StoreOrder collection
in the database
 */

router.route("/").get((req, res) => {
  StoreOrder.find()
    .then((storeOrder) => {
      res.json(storeOrder);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  const price = Number(req.body.price);
  const currQty = Number(req.body.currQty);
  const newQty = Number(req.body.newQty);
  const cityQty = Number(req.body.cityQty);
  const datetime = Date.parse(req.body.datetime);
  const storeName = req.body.storeName;
  const cityName = req.body.cityName;

  const newStoreOrder = new StoreOrder({
    skuid,
    product,
    origin,
    price,
    currQty,
    newQty,
    cityQty,
    datetime,
    storeName,
    cityName,
  });

  newStoreOrder
    .save()
    .then(() => res.json("StoreOrder added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  StoreOrder.findById(req.params.id)
    .then((storeOrder) => {
      res.json(storeOrder);
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").delete((req, res) => {
  StoreOrder.findByIdAndDelete(req.params.id)
    .then((storeOrder) => {
      res.json("Deleted StoreOrder");
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").post((req, res) => {
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  const price = Number(req.body.price);
  const currQty = Number(req.body.currQty);
  const newQty = Number(req.body.newQty);
  const cityQty = Number(req.body.cityQty);
  const datetime = Date.parse(req.body.datetime);
  const storeName = req.body.storeName;
  const cityName = req.body.cityName;

  StoreOrder.findByIdAndUpdate(
    req.params.id,
    {
      skuid: skuid,
      product: product,
      origin: origin,
      price: price,
      currQty: currQty,
      newQty: newQty,
      cityQty: cityQty,
      datetime: datetime,
      storeName: storeName,
      cityName: cityName,
    },
    (err) => {
      if (err) {
        res.status(400).json("Error", err);
      } else {
        res.json("Updated StoreOrder");
      }
    }
  ).catch((err) => {
    res.status(400).json("Error", err);
  });
});

module.exports = router;
