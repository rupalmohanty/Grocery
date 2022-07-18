const router = require("express").Router();
const Product = require("../models/product.model");

router.route("/").get((req, res) => {
  Product.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

router.route("/add").post((req, res) => {
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  const price = Number(req.body.price);
  const isActive = req.body.isActive;
  const datetime = Date.parse(req.body.datetime);

  const newProduct = new Product({
    skuid,
    product,
    origin,
    price,
    isActive,
    datetime,
  });

  newProduct
    .save()
    .then(() => res.json("Product added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Product.findById(req.params.id)
    .then((exercise) => {
      res.json(exercise);
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((exercise) => {
      res.json("Deleted Product");
    })
    .catch((err) => res.status(404).json(err));
});

router.route("/:id").post((req, res) => {
  const skuid = req.body.skuid;
  const product = req.body.product;
  const origin = req.body.origin;
  const price = Number(req.body.price);
  const isActive = req.body.isActive;
  const datetime = Date.parse(req.body.datetime);

  Product.findByIdAndUpdate(
    req.params.id,
    {
      skuid: skuid,
      product: product,
      origin: origin,
      price: price,
      isActive: isActive,
      datetime: datetime,
    },
    (err) => {
      if (err) {
        res.status(400).json("Error", err);
      } else {
        res.json("Updated Exercise");
      }
    }
  ).catch((err) => {
    res.status(400).json("Error", err);
  });
});

module.exports = router;
