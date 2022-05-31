const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const path = require("path");

app.use(cors());
const ConnectionDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
ConnectionDB();

const PORT = process.env.PORT || 5000;
__dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.send(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API IS RUNNING");
  });
}

app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(PORT, () => {
  console.log(`server listing to the port ${PORT}`);
});
