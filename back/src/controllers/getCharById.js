const axios = require("axios");
const { toJSON } = require("../utils/toJSON");
const dotenv = require("dotenv");
dotenv.config();
// const API_URL = "https://rickandmortyapi.com/api/character";
const { API_URL } = process.env;
const getCharById = (res, id) => {
  // console.log("entra");
  // console.log("API_URL: ", API_URL);
  axios
    .get(`${API_URL}/${id}`)
    .then((response) => {
      const { data } = response;
      // console.log(data);
      const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        image: data.image,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
      // return res.end(toJSON(character));
    })
    .catch((error) => {
      res.writeHead(404, { "Content-type": "text/plain" });
      return res.end(error.message);
    });
};

module.exports = {
  getCharById,
};
