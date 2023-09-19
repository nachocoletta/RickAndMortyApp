const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;
  // console.log("entra");
  try {
    const apiRequest = await axios.get(`${URL}/${id}`);
    const { data } = apiRequest;
    // console.log("apiRequest", apiRequest.data);
    if (data.error) {
      return res.status(404).send(data.error);
    }
    const character = {
      id: Number(data.id),
      name: data.name,
      status: data.status,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
    };

    // console.log(data);
    return res.status(200).json(character);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
// const getCharById2 = (req, res) => { // con promesas
//   const { id } = req.params;
//   axios
//     .get(`${URL}/${id}`)
//     .then(({ data }) => {
//       // si no encontro el personaje
//       if (data.error) {
//         return res.status(404).send(data.error);
//       }
//       const character = {
//         id: Number(data.id),
//         name: data.name,
//         status: data.status,
//         species: data.species,
//         origin: data.origin,
//         image: data.image,
//         gender: data.gender,
//       };
//       // console.log(data);
//       return res.status(200).json(character);
//     })
//     .catch((error) => {
//       return res.status(500).send(error.message);
//     });
// };

module.exports = { getCharById };
// const axios = require("axios");
// const { toJSON } = require("../utils/toJSON");
// const dotenv = require("dotenv");
// dotenv.config();
// // const API_URL = "https://rickandmortyapi.com/api/character";
// const { API_URL } = process.env;
// const getCharById = (res, id) => {
//   // console.log("entra");
//   // console.log("API_URL: ", API_URL);
//   axios
//     .get(`${API_URL}/${id}`)
//     .then((response) => {
//       const { data } = response;
//       // console.log(data);
//       const character = {
//         id: id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         image: data.image,
//       };
//       res.writeHead(200, { "Content-type": "application/json" });
//       return res.end(JSON.stringify(character));
//       // return res.end(toJSON(character));
//     })
//     .catch((error) => {
//       res.writeHead(404, { "Content-type": "text/plain" });
//       return res.end(error.message);
//     });
// };

// module.exports = {
//   getCharById,
// };
