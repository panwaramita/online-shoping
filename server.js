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
app.use("/api/products", productRoutes);

ConnectionDB();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(__dirname + "/"));
// app.get("*", function (request, response) {
//   response.sendFile(path.resolve(__dirname, "client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`server listing to the port ${PORT}`);
});
