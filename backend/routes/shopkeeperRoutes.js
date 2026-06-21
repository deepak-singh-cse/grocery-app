const express = require("express");
const router = express.Router();

const Shopkeeper =
  require("../models/Shopkeeper");

// Get All Shopkeepers
router.get("/", async (req, res) => {

  try {

    const shopkeepers =
      await Shopkeeper.find();

    res.json(shopkeepers);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

// Register
router.post(
  "/register",
  async (req, res) => {

    try {

      const {
        name,
        email,
        mobile,
        address,
        password,
      } = req.body;

      const shopkeeper =
        await Shopkeeper.create({

          name,
          email,
          mobile,
          address,
          password,

        });

      res.json({
        success: true,
        shopkeeper,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

// Login
router.post(
  "/login",
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      const shopkeeper =
        await Shopkeeper.findOne({
          email,
          password,
        });

      if (!shopkeeper) {

        return res
          .status(400)
          .json({
            message:
              "Invalid Credentials",
          });

      }

      res.json({
        success: true,
        shopkeeper,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

module.exports = router;