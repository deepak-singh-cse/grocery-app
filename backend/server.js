require("dotenv").config();
require("dotenv").config();
const paymentRoutes =
  require("./routes/paymentRoutes");
const authRoutes =
  require("./routes/authRoutes");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const shopkeeperRoutes =
require("./routes/shopkeeperRoutes");
const customerRoutes =
require("./routes/customerRoutes");

const app = express();

app.use(cors());
const productRoutes =
  require("./routes/productRoutes");
  const orderRoutes =
  require("./routes/orderRoutes");
app.use(express.json());
app.use(
  "/api/products",
  productRoutes
);
app.use(
  "/api/payment",
  paymentRoutes
);
app.use(
  "/api/orders",
  orderRoutes
);
app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/shopkeeper",
  shopkeeperRoutes
);
app.use(
  "/api/customer",
  customerRoutes
);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected ✅");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});