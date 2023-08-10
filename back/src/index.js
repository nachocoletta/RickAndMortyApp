const axios = require("axios");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getCharById } = require("./controllers/getCharById");
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favoritesRouter = require("./routes/favorites");
const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());

app.use(cors());

app.use("/character", characterRouter);
app.use("/user", userRouter);
app.use("/favorites", favoritesRouter);

const fav = [];

app.get("/healt-check/:id", getCharById);

app.get("/rickandmorty/character/:id", (req, res) => {
  const { id } = req.params;

  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const character = response.data;
      return res.status(200).json(character);
    })
    .catch((error) => {
      return res.status(404).json({ error: error.message });
    });
});

app.get("/rickandmorty/detail/:detailId", (req, res) => {
  const { detailId } = req.params;

  axios
    .get(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => {
      const character = response.data;
      return res.status(200).json(character);
    })
    .catch((error) => {
      console.log(error.message);
      return res.status(404).json({ error: error.message });
    });
});

app.get("/rickandmorty/fav", (req, res) => {
  return res.status(200).send(fav);
});

app.post("/rickandmorty/fav", (req, res) => {
  const character = req.body;

  fav.push(character);
  return res.status(200).send("Personaje agregado a favoritos");
});

app.delete("/rickandmorty/fav", (req, res) => {});

app.listen(3001, () => {
  console.log("corriendo en puerto 3001");
});

// const http = require("http");

// const dotenv = require("dotenv");
// dotenv.config();

// const { PORT } = process.env;
// const { getCharById } = require("../controllers/getCharById");
// const { getCharDetail } = require("../controllers/getCharDetail");
// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");

//     if (req.url.includes("onSearch")) {
//       const id = req.url.split("/").at(-1);
//       getCharById(res, id);
//       return;
//     }
//     if (req.url.includes("detail")) {
//       const id = req.url.split("/").at(-1);
//       console.log("getchar");
//       getCharDetail(res, id);
//       return;
//     }
//   })
//   .listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
//   });

// const http = require("http");
// const fs = require("fs");
// const dotenv = require("dotenv");
// dotenv.config();
// const characters = require("../utils/data");
// const { getCharById } = require("../controllers/getCharById");
// const { PORT } = process.env;

// http
//   .createServer((req, res) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     if (req.url.includes("rickandmorty/character")) {
//       const id = req.url.split("/").at(-1);
//       getCharById(res, id);
//       return;
//     }
//     return;
//   })
//   .listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
//   });
