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

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

// ...
// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
}

app.use(express.json());
app.use("/api/products", productRoutes);
app.listen(PORT, () => {
  console.log(`server listing to the port ${PORT}`);
});
