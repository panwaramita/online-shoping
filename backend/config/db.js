const mongoose = require("mongoose");

function ConnectDB() {
  mongoose.connect("mongodb+srv://amita:amita@cluster0.ckccv.mongodb.net/car", {
    useNewUrlParser: true,
  });
  const conn = mongoose.connection;
  conn.on("connected", () => {
    console.log("connected hello");
  });

  conn.on("error", () => {
    console.log("error");
  });
}

module.exports = ConnectDB;
