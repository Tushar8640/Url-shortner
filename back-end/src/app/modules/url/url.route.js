const express = require("express");
const { urlController } = require("./url.controller");
const router = express.Router();

router.post("/", urlController.createShortUrl);
router.get("/:shortUrl", urlController.redirectUrl);

module.exports = router;
