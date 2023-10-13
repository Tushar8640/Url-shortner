const express = require("express");
const UrlRoutes = require("../modules/url/url.route");

const router = express.Router();

const moduleRoutes = [
  {
    path: "/",
    routes: UrlRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));
module.exports = moduleRoutes;
