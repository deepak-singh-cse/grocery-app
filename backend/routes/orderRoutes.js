const express = require("express");
const router = express.Router();

const Order = require("../models/Order");


// GET ALL ORDERS
router.get("/", async (req, res) => {

  try {

    const orders =
      await Order.find();

    res.json(orders);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// CREATE ORDER
router.post("/", async (req, res) => {

  try {

    const order =
      await Order.create(req.body);

    res.status(201).json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// UPDATE STATUS
router.put("/:id", async (req, res) => {

  try {

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    res.json(order);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;
router.delete("/:id", async (req, res) => {

  try {

    await Order.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Order Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});
router.delete("/", async (req, res) => {

  try {

    await Order.deleteMany({});

    res.json({
      message: "All Orders Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});