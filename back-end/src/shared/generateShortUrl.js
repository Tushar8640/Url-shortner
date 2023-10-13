const Url = require("../app/modules/url/url.model");


async function generateShortUrl() {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const shortUrlLength = 6;
  let isUnique = false;
  let shortenUrl;

  while (!isUnique) {
    shortenUrl = "";
    for (let i = 0; i < shortUrlLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      shortenUrl += characters.charAt(randomIndex);
    }

    // Check if the generated short URL is already in the database
    const existingUrl = await Url.findOne({ shortenUrl });
    if (!existingUrl) {
      isUnique = true;
    }
  }

  return shortenUrl;
}

module.exports = generateShortUrl;
