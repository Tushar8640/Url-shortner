const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");
dotenv.config();

const port = 8000;

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("🚀 Database connected successfully");
    app.listen(port, () => {
      console.log(` App listening on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to connect database", err);
  }
};
db();
