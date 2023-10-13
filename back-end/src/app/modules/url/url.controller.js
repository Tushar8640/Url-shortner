const generateShortUrl = require("../../../shared/generateShortUrl");
const { urlServices } = require("./url.service");

const createShortUrl = async (req, res) => {
  try {
    const { originalUrl } = req.body;
    const shortenUrl = await generateShortUrl();
    const result = await urlServices.createShortUrl({ originalUrl, shortenUrl });
    console.log(result);
    res.send(result);
  } catch (err) {
    res.send({
      message: "something went wrong",
      error: err.message,
    });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;

    const url = await urlServices.redirectUrl(shortUrl);

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(url.originalUrl);
  } catch (err) {
    console.error("Error retrieving a shortened URL:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.urlController = {
  createShortUrl,
  redirectUrl,
};
