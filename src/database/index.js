const config = require("../../config");
const mongoose = require("mongoose");

const dbURI = config.MONGODB_URI;

// Create the database connection
const connectDB = () => {
  mongoose
    .connect(dbURI)
    .then(() =>
      console.log("MongoDB database connection established successfully")
    )
    .catch((error) => console.error("Error connecting to MongoDB:", error));
};

module.exports = connectDB;
