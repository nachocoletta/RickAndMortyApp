import React, { useState } from "react";
import style from "./App.module.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import axios from "axios";
// import SearchBar from "./components/SearchBar.jsx";
// import characters from "./data.js";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    let exists = characters.find(
      (character) => parseInt(character.id) === parseInt(id)
    );
    // console.log(exists);
    if (!exists) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      window.alert("El personaje ya esta agregado");
    }
  };

  const onRandomSearch = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;

    axios(`https://rickandmortyapi.com/api/character/${randomId}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClose = (id) => {
    // window.alert("click");
    let arregloFiltrado = characters.filter((character) => character.id !== id);
    setCharacters(arregloFiltrado);
  };

  return (
    <div className={style.App}>
      <Nav onSearch={onSearch} onRandomSearch={onRandomSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <hr /> */}
    </div>
  );
}

export default App;
