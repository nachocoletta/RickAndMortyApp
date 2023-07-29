import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import styles from "./Favorites.module.css";
class Favorites extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    // console.log(this.props);
    return (
      <div className={styles.cardsContainer}>
        {this.props.myFavorites.map((character) => {
          return <Card key={character.id} character={character} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, null)(Favorites);
