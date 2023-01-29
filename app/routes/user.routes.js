const  authJwt  = require("../middlewares/authJwt");
const {getUsers} = require("../controllers/user.controller.js")
// const {
//   creatorBoard,
//   adminBoard,
//   editorBoard
// } = require("../controllers/user.controller");

//Einstieg über dashboard.3x:

const express = require("express")
  // const tasks = require("../controllers/task.controller.js");
  const routes = express.Router();
  routes.get(
    "/",
    [authJwt.verifyToken, authJwt.findRole],
    getUsers
  );

  

  module.exports = routes