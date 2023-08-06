const http = require("http");
const fs = require("fs");
// const { axios } = require("axios");
// const personajes = require("../utils/data");
const characters = require("../utils/data");

const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    // console.log(`Server en puerto ${PORT}`);
    // console.log(req.url);
    if (req.url.includes("rickandmorty/character")) {
      const id = req.url.split("/").at(-1);
      //   console.log(id);
      const findedCharacter = characters.find(
        (char) => char.id === parseInt(id)
      );

      if (findedCharacter) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(findedCharacter));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Personaje no encontrado");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("URL INVALIDA");
    }
    return;
  })
  .listen(PORT, "localhost");
