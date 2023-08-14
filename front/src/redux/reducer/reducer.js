import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/action-types";

const initalState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    // case ADD_FAV:
    //   return {
    //     ...state,
    //     myFavorites: [...state.myFavorites, action.payload],
    //     allCharacters: [...state.allCharacters, action.payload],
    //   };
    case REMOVE_FAV: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: state.allCharacters.filter(
          (character) => character.id !== action.payload
        ),
      };
    }
    // case REMOVE_FAV: {
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (character) => character.id !== action.payload
    //     ),
    //   };
    // }
    case FILTER: {
      console.log(action.payload);
      if (action.payload === "All") {
        console.log("entra");
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter(
            (character) => character.gender === action.payload
          ),
        };
      }
    }
    case ORDER: {
      const charactersOrdered = [...state.myFavorites];
      const charactersFiltered =
        action.payload === "A"
          ? charactersOrdered.sort(function (a, b) {
              if (a.id > b.id) {
                return 1;
              } else if (a.id < b.id) {
                return -1;
              } else {
                return 0;
              }
            })
          : charactersOrdered.sort(function (a, b) {
              if (a.id < b.id) {
                return 1;
              } else if (a.id > b.id) {
                return -1;
              } else {
                return 0;
              }
            });
      return {
        ...state,
        myFavorites: charactersFiltered,
      };
    }
    // case FILTER: {
    //   return {
    //     ...state,
    //     myFavorites: state.allCharacters.filter(
    //       (character) => character.gender === action.payload
    //     ),
    //   };
    // }
    // case ORDER: {
    //   const charactersOrdered = [...state.allCharacters];
    //   const charactersFiltered =
    //     action.payload === "A"
    //       ? charactersOrdered.sort((a, b) => a.id - b.id)
    //       : charactersOrdered.sort((a, b) => b.id - a.id);

    //   return {
    //     ...state,
    //     myFavorites: charactersFiltered,
    //   };
    // }

    default:
      // console.log("entra al default");
      return {
        ...state,
      };
  }
};

export default rootReducer;
