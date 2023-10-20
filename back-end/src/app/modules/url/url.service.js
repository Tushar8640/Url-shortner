const Url = require("./url.model");

const createShortUrl = async (data) => {
  console.log(data);
  const shortenUrl = new Url(data);

  const result = await shortenUrl.save();
  return result;
};

const redirectUrl = async (data) => {
  const url = await Url.findOne({ shortenUrl: data });

  if (url) {
    url.clickCount++;
    await url.save();
    return url;
  } else {
    throw new ApiError(404, "url not found");
  }
};

const getAllUrlService = async (data) => {
  const urls = await Url.find({});

  return urls;
};

exports.urlServices = {
  createShortUrl,
  redirectUrl,
  getAllUrlService,
};
