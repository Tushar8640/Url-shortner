const express = require("express");
const { authController } = require("./auth.controller");

const router = express.Router();

router.get("/", authController.login);

module.exports = router;
