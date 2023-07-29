import React from "react";
import SearchBar from "./SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
const Nav = (props) => {
  return (
    <div className={styles.randomCharacter}>
      <div className={styles.divBotones}>
        <Link to={`/favorites`}>
          <button>Favoritos</button>
        </Link>
        <Link to={`/home`}>
          <button
            className={styles.randomCharacterButton}
            onClick={props.onRandomSearch}
          >
            Personaje Random
          </button>
        </Link>
        <Link to={`/about`}>
          <button>About</button>
        </Link>
        <Link to={`/home`}>
          <button>Home</button>
        </Link>
        <Link to={`/`}>
          <button onClick={props.logout}>Logout</button>
        </Link>
      </div>
      <div className={styles.divSearchBar}>
        <SearchBar onSearch={props.onSearch} />
      </div>
    </div>
  );
};

export default Nav;
