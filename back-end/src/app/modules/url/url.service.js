const Url = require("./url.model");

const createShortUrl = async (data) => {

  console.log(data);
  const shortenUrl = new Url(data);

  const result = await shortenUrl.save();
  return result;
};
const redirectUrl = async (data) => {
  const url = await Url.findOne({ shortenUrl: data });

  return url;
};

exports.urlServices = {
  createShortUrl,
  redirectUrl,
};
