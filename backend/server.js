const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");
const productRouter = require("./routes/product");
const storeOrderRouter = require("./routes/storeOrder");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);
app.use("/product", productRouter);
app.use("/storeOrder", storeOrderRouter);
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex: true});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
