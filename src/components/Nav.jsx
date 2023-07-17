import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
const Nav = (props) => {
  return (
    <div className={styles.randomCharacter}>
      <button
        className={styles.randomCharacterButton}
        onClick={props.onRandomSearch}
      >
        Personaje Random
      </button>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
