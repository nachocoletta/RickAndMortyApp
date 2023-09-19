const express = require("express");
const characterRouter = express.Router();
const { getCharById } = require("../controllers/getCharById");
const { getCharDetailAsync } = require("../controllers/getCharDetail");

characterRouter.get("/:id", getCharById);
characterRouter.get("/detail/:id", getCharDetailAsync);

module.exports = characterRouter;
