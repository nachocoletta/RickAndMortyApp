import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className={styles.randomCharacter}>
      <button
        className={styles.randomCharacterButton}
        onClick={props.onRandomSearch}
      >
        Personaje Random
      </button>
      <Link to={`/about`}>
        <button>About</button>
      </Link>
      <Link to={`/home`}>
        <button>Home</button>
      </Link>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
};

export default Nav;
