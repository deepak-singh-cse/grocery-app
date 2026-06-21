const express = require("express");
const router = express.Router();

const Product = require("../models/Product");


// GET ALL PRODUCTS
router.get("/", async (req, res) => {

  try {

    const products = await Product.find().select(
  "name price desc image"
);

    res.json(products);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD PRODUCT
router.post("/", async (req, res) => {

  try {

    const product =
      await Product.create(req.body);

    res.status(201).json(product);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// DELETE PRODUCT
router.delete("/:id", async (req, res) => {

  try {

    await Product.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Product Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;