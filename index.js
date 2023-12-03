const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {
  createProduct,
  getAllProducts,
  deleteProduct,
  updateProduct,
} = require("./productsOperations");
app.use(express.json());

mongoose
  .connect("mongodb://localhost/mernstack", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connection to MongoDB created");

    let updatedProduct = updateProduct(
      "5ebb0d0dfc7bc215c8c8eaf9",
      "DELL Updated",
      250,
      []
    );
  })
  .catch((err) => {
    console.log("Error Connecting");
    console.log(err);
  });
app.listen(3000);