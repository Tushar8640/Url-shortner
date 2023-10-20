const express = require("express");
const  UserRoutes  = require("../modules/user/user.route");
const AuthRoutes  = require("../modules/auth/auth.route");
const UrlRoutes  = require("../modules/url/url.route");

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes,
  },
  {
    path: "/urls",
    routes: UrlRoutes,
  },
  {
    path: "/users",
    routes: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

module.exports = router;
