const express = require("express");
const { authController } = require("./auth.controller");

const router = express.Router();

router.get("/login", authController.login);

module.exports = router;
