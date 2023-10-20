const express = require("express");
const { urlController } = require("./url.controller");
const router = express.Router();

router.get("/", urlController.getAllUrlController);
router.post("/", urlController.createShortUrl);
router.get("/:shortUrl", urlController.redirectUrl);

module.exports = router;
