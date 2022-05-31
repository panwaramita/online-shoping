const express = require("express");
require("dotenv").config();
const path = require("path");

const cors = require("cors");
const PORT = process.env.PORT || 5000;

const ConnectionDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
ConnectionDB();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
app.use("/api/products", productRoutes);

app.use(express.static(__dirname + "/"));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "frontend/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`server listing to the port ${PORT}`);
});
