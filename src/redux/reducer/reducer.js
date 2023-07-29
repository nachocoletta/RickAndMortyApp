import { ADD_FAV, REMOVE_FAV } from "../actions/action-types";

const initalState = {
  myFavorites: [],
};

const rootReducer = (state = initalState, action) => {
  console.log("entra afuera del switch: ", action.type);
  switch (action.type) {
    case ADD_FAV:
      //   console.log("action.payload", action.payload);
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV: {
      // console.log("entra al reducer");
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    }
    default:
      // console.log("entra al default");
      return {
        ...state,
      };
  }
};

export default rootReducer;
