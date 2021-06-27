import ACTION_TYPES from "./actions.js";

export default (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.TYPE_SEARCH:
      return {
        ...state,
        typedInMovieTitle: action.value,
      };
    case ACTION_TYPES.SUBMIT_SEARCH:
      console.log(action);
      return {
        ...state,
        searchedMovieName: action.value,
      };
    case ACTION_TYPES.FETCH_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ACTION_TYPES.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        moviesList: action.payload,
      };
    case ACTION_TYPES.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        moviesList: [],
      };
    default:
      return state;
  }
};
