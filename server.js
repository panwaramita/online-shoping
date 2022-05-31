const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(cors());
const ConnectionDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
ConnectionDB();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(PORT, () => {
  console.log(`server listing to the port ${PORT}`);
});
