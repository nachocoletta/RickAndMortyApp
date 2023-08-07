import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/detail/${id}`).then(
      // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={`${styles.textContainer} ${styles.detailInfo}`}>
        <h1>{character.name}</h1>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        {character.origin &&
          character.origin.name && ( // Check if character.origin exists and has a name property
            <h2>Origin: {character.origin.name}</h2>
          )}
      </div>
      <div className={styles.imageContainer}>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
};

export default Detail;
