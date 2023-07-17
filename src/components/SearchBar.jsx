import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  // console.log(props);

  const [id, setId] = React.useState();

  const handleChange = (event) => {
    setId(event.target.value);
    console.log(id);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input type="search" onChange={handleChange} placeholder="Personaje..." />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}
