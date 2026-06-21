const jwt = require("jsonwebtoken");
const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

const User = require("../models/User");


// REGISTER
router.post(
  "/register",
  async (req, res) => {

    try {

      const {
        name,
        mobile,
        password,
      } = req.body;

      const userExists =
        await User.findOne({
          mobile,
        });

      if (userExists) {

        return res.status(400).json({
          message:
            "User Already Exists",
        });

      }

      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      const user =
        await User.create({
          name,
          mobile,
          password:
            hashedPassword,
        });

      res.status(201).json(user);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);
// LOGIN
router.post(
  "/login",
  async (req, res) => {

    try {

      const {
        mobile,
        password,
      } = req.body;

      const user =
        await User.findOne({
          mobile,
        });

      if (!user) {

        return res.status(400).json({
          message: "User Not Found",
        });

      }

      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      if (!isMatch) {

        return res.status(400).json({
          message:
            "Invalid Password",
        });

      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        "mysecretkey",
        {
          expiresIn: "7d",
        }
      );

      res.json({
        token,
        user: {
          id: user._id,
          name: user.name,
          mobile: user.mobile,
        },
      });

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }
);

module.exports = router;