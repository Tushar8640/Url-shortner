const express = require("express");

const cors = require("cors");
const dotenv = require("dotenv");



const app = express();

dotenv.config();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const moduleRoutes = require("./app/routes");
const UrlRoutes = require("./app/modules/url/url.route");
const UserRoutes = require("./app/modules/user/user.route");
const { globalErrorHandler } = require("./app/middlewares/globalErrorHandler");



app.use("/", UrlRoutes);
app.use("/api/v1", moduleRoutes);

app.use(globalErrorHandler)
app.use((req, res, next) => {
    res.status(404).json({
      success: false,
      message: 'Not Found',
      errorMessages: [
        {
          path: req.originalUrl,
          message: 'API Not Found',
        },
      ],
    });
    next();
  });
  
module.exports = app;
