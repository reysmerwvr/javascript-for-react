import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_ERROR,
  ADD_MOVIES,
  ADD_MOVIES_SUCCESS,
  ADD_MOVIES_ERROR,
  FILTER_MOVIES,
  SEARCH_MOVIE,
} from "../actions/types.js";
import {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
  searchMovie,
} from "../normalize.js";

const INITIAL_STATE = {
  error: null,
  loading: false,
  movieList: movieListAsMap([]),
  filter: "all",
  list: {
    all: getAllIds([]),
    mostValued: getMostValuedIds([]),
    leastValued: getLeastValuedIds([]),
  },
};

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        movieList: movieListAsMap(payload),
        list: {
          all: getAllIds(payload),
          mostValued: getMostValuedIds(payload),
          leastValued: getLeastValuedIds(payload),
        },
      };
    case GET_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADD_MOVIES:
      return {
        ...state,
        loading: true,
      };
    case ADD_MOVIES_SUCCESS:
      const {
        movieList,
        list: { all, mostValued, leastValued },
      } = state;
      return {
        ...state,
        loading: false,
        movieList: movieListAsMap(payload, movieList),
        list: {
          ...state.list,
          all: getAllIds(payload, all),
          mostValued: getMostValuedIds(payload, mostValued),
          leastValued: getLeastValuedIds(payload, leastValued),
        },
      };
    case ADD_MOVIES_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filter: payload,
      };
    case SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all),
        },
      };
    default:
      return state;
  }
};

export default moviesReducer;
