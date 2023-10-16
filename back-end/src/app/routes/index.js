const express = require("express");
const  UserRoutes  = require("../modules/user/user.route");
const AuthRoutes  = require("../modules/auth/auth.route");

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: AuthRoutes,
  },
  {
    path: "/users",
    routes: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.routes));

module.exports = router;
