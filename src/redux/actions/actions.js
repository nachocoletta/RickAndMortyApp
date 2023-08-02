import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

export const addFav = (character) => {
  //   console.log(character);
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  // console.log("entra a la action");
  return {
    type: REMOVE_FAV,
    payload: id,
  };
};

export const filterCards = (gender) => {
  // console.log(gender);
  return {
    type: FILTER,
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};
