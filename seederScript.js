require("dotenv").config();

const productData = require("./data/products");

const ConnectDB = require("./config/db");

const Product = require("./models/Product");

ConnectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);
    console.log("done");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

importData();
