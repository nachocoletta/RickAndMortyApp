const axios = require("axios");
const { toJSON } = require("../utils/toJSON");
const dotenv = require("dotenv");
dotenv.config();
const { API_URL } = process.env;

const getCharDetailAsync = async (req, res) => {
  try {
    console.log("entra a getchardetailasync");
    let { id } = req.params;
    console.log(id);
    const response = await axios.get(`${API_URL}/${id}`);
    // console.log(response);
    const { data } = response;

    const character = {
      id: id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      status: data.status,
      origin: data.origin,
      species: data.species,
    };

    return res.status(200).json(character);
  } catch (axiosError) {
    return res.status(500).json({ error: axiosError.message });
  }
};
const getCharDetail = (res, id) => {
  // console.log("entra a getCharDetail");
  axios
    .get(`${API_URL}/${id}`)
    // .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { data } = response;
      // console.log(data);
      const character = {
        id: id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data.origin,
        species: data.species,
      };
      res.writeHead(200, { "Content-type": "application/json" });
      return res.end(JSON.stringify(character));
      // return res.end(toJSON(character));
    })
    .catch((error) => {
      console.log("entra por el error");
      console.log(error.message);
    });
};

module.exports = {
  getCharDetail,
  getCharDetailAsync,
};
