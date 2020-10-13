import store from "../store.js";
import movies from "../movies.js";
import {
  ADD_MOVIES,
  ADD_MOVIES_SUCCESS,
  ADD_MOVIES_ERROR,
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  FILTER_MOVIES,
  SEARCH_MOVIE,
} from "./types.js";
import api from "../api.js";

export const getLocalMovies = () => {
  store.dispatch({ type: GET_MOVIES });
  store.dispatch({
    type: GET_MOVIES_SUCCESS,
    payload: movies,
  });
};

export const fetchMovies = async (page) => {
  store.dispatch({ type: ADD_MOVIES });
  try {
    const { results } = await api.moviePage(page);
    store.dispatch({
      type: ADD_MOVIES_SUCCESS,
      payload: results,
    });
  } catch (error) {
    console.log(error);
    store.dispatch({
      type: ADD_MOVIES_ERROR,
      payload: error,
    });
  }
};

export const setFilter = (value) => {
  store.dispatch({
    type: FILTER_MOVIES,
    payload: value,
  });
};

export const searchMovie = (query) => {
  if (query) {
    return store.dispatch({
      type: SEARCH_MOVIE,
      payload: query,
    });
  }
  return store.dispatch({
    type: FILTER_MOVIES,
    payload: "all",
  });
};

export default getLocalMovies;
