import { ADD_FAV, REMOVE_FAV } from "../actions/action-types";

const initalState = {
  myFavorites: [],
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FAV:
      //   console.log("action.payload", action.payload);
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
      };
    case REMOVE_FAV: {
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (character) => character.id !== action.payload
        ),
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
