const http = require("http");

const dotenv = require("dotenv");
dotenv.config();

const { PORT } = process.env;
const { getCharById } = require("../controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (req.url.includes("onSearch")) {
      const id = req.url.split("/").at(-1);
      getCharById(res, id);
    }
  })
  .listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });

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
