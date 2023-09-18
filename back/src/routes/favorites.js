const express = require("express");
const favoritesRouter = express.Router();

const {
  postFav,
  deleteFav,
  getFav,
} = require("../controllers/handleFavorites.js");

favoritesRouter.get("/", getFav);
favoritesRouter.post("/", postFav);
favoritesRouter.delete("/:id", deleteFav);

module.exports = favoritesRouter;
