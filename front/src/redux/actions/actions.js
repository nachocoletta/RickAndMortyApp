import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";
import axios from "axios";
// export const addFav = (character) => {
//   //   console.log(character);
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };

export const addFavBis = (character) => {
  const endpoint = "http://localhost:3001/favorites";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/favorites";

  // console.log("data es:", data);
  return async (dispatch) => {
    const { data } = await axios.post(endpoint, character);
    return dispatch({
      type: ADD_FAV,
      payload: data,
    });
  };
};
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/favorites/${id}`;

  return async (dispatch) => {
    const { data } = await axios.delete(endpoint);
    return dispatch({
      type: REMOVE_FAV,
      payload: data,
    });
  };

  // return (dispatch) => {
  //   axios.delete(endpoint).then(({ data }) => {
  //     return dispatch({
  //       type: REMOVE_FAV,
  //       payload: data,
  //     });
  //   });
  // };
};
// export const removeFav = (id) => {
//   // console.log("entra a la action");
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

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
