const express = require("express");
const { userController } = require("./user.controller");

const router = express.Router();

router.post("/", userController.createUser);
// router.get("/:shortUrl", urlController.redirectUrl);

module.exports = router;
