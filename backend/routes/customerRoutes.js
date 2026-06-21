const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");
router.post(
  "/register",
  async (req, res) => {

    try {

      const {
        name,
        mobile,
        password,
      } = req.body;

      const customer =
        await Customer.create({
          name,
          mobile,
          password,
        });

      res.json(customer);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
)
router.post(
  "/login",
  async (req, res) => {

    try {

      const {
        mobile,
        password,
      } = req.body;

      const customer =
        await Customer.findOne({
          mobile,
        });

      if (!customer) {

        return res.status(404).json({
          message: "User Not Found",
        });

      }

      if (
        customer.password !== password
      ) {

        return res.status(400).json({
          message: "Wrong Password",
        });

      }

      res.json({
        success: true,
        customer,
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);
router.post("/login", async (req, res) => {

  console.log("BODY:", req.body);

  const { mobile, password } = req.body;

  const customer = await Customer.findOne({
    mobile,
  });

  console.log("FOUND:", customer);

  if (!customer) {
    return res.status(404).json({
      message: "User Not Found",
    });
  }

  if (customer.password !== password) {
    return res.status(400).json({
      message: "Wrong Password",
    });
  }

  res.json({
    success: true,
    customer,
  });

});
module.exports = router;