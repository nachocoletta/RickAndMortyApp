import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions/actions";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFav: false,
    };
  }

  componentDidMount() {
    const { myFavorites, character } = this.props;
    myFavorites.forEach((fav) => {
      if (fav.id === character.id) {
        this.setState({
          isFav: true,
        });
      }
    });
  }
  handleFavorite = () => {
    const { character, addFav, removeFav } = this.props;
    const { isFav } = this.state;
    // Toggle the favorite status
    if (isFav) {
      removeFav(character.id);
    } else {
      addFav(character);
    }

    this.setState((prevState) => ({
      isFav: !prevState.isFav,
    }));
  };

  render() {
    const { character, onClose } = this.props;
    const { isFav } = this.state;

    return (
      <div key={character.id} className={styles.divContenedorCard}>
        <div className={styles.buttonsFavoritesAndClose}>
          {isFav ? (
            <button onClick={this.handleFavorite}>❤️</button>
          ) : (
            <button onClick={this.handleFavorite}>🤍</button>
          )}

          <div className={styles.buttonStyle}>
            <button onClick={() => onClose(character.id)}>X</button>
          </div>
        </div>
        <Link to={`/detail/${character.id}`}>
          <h2>Name: {character.name}</h2>
        </Link>
        <h2>Status: {character.status}</h2>
        <h2>Species: {character.species}</h2>
        <h2>Gender: {character.gender}</h2>
        <h2>Origin: {character.origin.name}</h2>
        <div className={styles.imageContainer}>
          <img src={character.image} alt={character.name} />
        </div>
      </div>
    );
  }
}

// Connect the component to Redux store
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);

// import React, { useState } from "react";
// import styles from "./Card.module.css";
// import { Link } from "react-router-dom";
// import { addFav, removeFav } from "../redux/actions/actions";

// export default function Card(props) {
//   const { character, onClose } = props;
//   const [isFav, setIsFav] = useState(false);

//   const handleFavorite = () => {

//   }

//   return (
//     <div key={character.id} className={styles.divContenedorCard}>
//       <div className={styles.buttonStyle}>
//         <button onClick={() => onClose(character.id)}>X</button>
//       </div>
//       <Link to={`/detail/${character.id}`}>
//         <h2>Name: {character.name}</h2>
//       </Link>
//       <h2>Status: {character.status}</h2>
//       <h2>Species: {character.species}</h2>
//       <h2>Gender: {character.gender}</h2>
//       <h2>Origin: {character.origin.name}</h2>
//       <div className={styles.imageContainer}>
//         <img src={character.image} alt={character.name} />
//       </div>
//     </div>
//   );

//   function mapDispatchToProps(dispatch) {
//     return {
//       addFav: (character) => dispatch(addFav(character)),
//       removeFav: (id) => dispatch(removeFav(id)),
//     };
//   }
// }
