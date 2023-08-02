// import React, { Component } from "react";
// import { connect } from "react-redux";
// import Card from "./Card";
// import styles from "./Favorites.module.css";
// class Favorites extends Component {
//   constructor(props) {
//     super(props);
//     console.log(props);
//   }

//   render() {
//     // console.log(this.props);
//     const { onClose } = this.props;
//     return (
//       <div className={styles.cardsContainer}>
//         <select>
//           <option value="Male">Male</option>
//           <option value="Female">Male</option>
//           <option value="Genderless">Male</option>
//           <option value="unknown">Male</option>
//         </select>
//         {this.props.myFavorites.map((character) => {
//           return (
//             <Card key={character.id} character={character} onClose={onClose} />
//           );
//         })}
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     myFavorites: state.myFavorites,
//   };
// }

// export default connect(mapStateToProps, null)(Favorites);

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "./Card";
import styles from "./Favorites.module.css";
import { filterCards, orderCards } from "../redux/actions/actions";

const Favorites = ({ onClose }) => {
  // Utilizar el hook useSelector para obtener la lista de favoritos del estado global
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    // setAux(!aux);
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    console.log(event.target.value);
    dispatch(filterCards(event.target.value));
  };
  return (
    <div className={styles.cardsContainer}>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      {myFavorites.map((character) => {
        return (
          <Card key={character.id} character={character} onClose={onClose} />
        );
      })}
    </div>
  );
};

export default Favorites;
