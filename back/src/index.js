const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const { getCharById } = require("./controllers/getCharById");
const characterRouter = require("./routes/character");
const userRouter = require("./routes/user");
const favoritesRouter = require("./routes/favorites");
require("dotenv").config();

const { PORT } = process.env;
const express = require("express");
const app = express();

const morgan = require("morgan");

app.use(express.json()); // para poder recibir JSON por req.body
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.use("/character", characterRouter);
app.use("/user", userRouter);
app.use("/favorites", favoritesRouter);

app.use(cors()); // esto reemplaza a todo el codigo comentado que sigue, instalo cors
// esto habilita cors para todos... osea con *

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

const fav = [];

app.get("/healt-check/:id", getCharById);

// app.get("/rickandmorty/character/:id", (req, res) => {
//   const { id } = req.params;

//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const character = response.data;
//       return res.status(200).json(character);
//     })
//     .catch((error) => {
//       return res.status(404).json({ error: error.message });
//     });
// });

// app.get("/rickandmorty/detail/:detailId", (req, res) => {
//   const { detailId } = req.params;

//   axios
//     .get(`https://rickandmortyapi.com/api/character/${detailId}`)
//     .then((response) => {
//       const character = response.data;
//       return res.status(200).json(character);
//     })
//     .catch((error) => {
//       console.log(error.message);
//       return res.status(404).json({ error: error.message });
//     });
// });

// app.get("/rickandmorty/fav", (req, res) => {
//   return res.status(200).send(fav);
// });

// app.post("/rickandmorty/fav", (req, res) => {
//   const character = req.body;

//   fav.push(character);
//   return res.status(200).send("Personaje agregado a favoritos");
// });

// app.delete("/rickandmorty/fav", (req, res) => {});

app.listen(PORT, () => {
  console.log(`corriendo en puerto ${PORT}!`);
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
