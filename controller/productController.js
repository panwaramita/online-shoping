const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

const getProductById = async (req, res) => {
  try {
    console.log("hello", req.params.id);
    const id = req.params.id;
    const products = await Product.findById(`${id}`);
    console.log("hias", products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
