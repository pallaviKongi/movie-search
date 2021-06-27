import React, { useReducer, useEffect } from "react";
import reducer from "./reducer.js";
import ACTION_TYPES from "./actions.js";
import MoviesList from "./components/movies-list.js";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import "./App.scss";
import axios from "axios";

const App = () => {
  const initialState = {
    typedInMovieTitle: "",
    searchedMovieName: "",
    loading: false,
    error: false,
    moviesList: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(async () => {
    const { searchedMovieName } = state;
    if (searchedMovieName) {
      const fetchData = async () => {
        dispatch({ type: "FETCH_DATA" });
        try {
          const url = `http://www.omdbapi.com/?apikey=fc1b4208&s=${searchedMovieName}&type=movie&plot=short`;
          const result = await axios(url);
          dispatch({ type: "FETCH_DATA_SUCCESS", payload: result.data.Search });
        } catch (e) {
          dispatch({ type: "FETCH_DATA_ERROR" });
        }
      };
      fetchData();
    }
  }, [state.searchedMovieName]);

  const onSubmitSearch = (event) => {
    const { typedInMovieTitle } = state;
    event.preventDefault();
    if (typedInMovieTitle !== state.searchedMovieName) {
      dispatch({
        type: ACTION_TYPES.SUBMIT_SEARCH,
        value: typedInMovieTitle,
      });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <span>Movie</span>
        <span className="title"> Finder</span>
      </header>
      <form
        action=""
        onSubmit={(event) => onSubmitSearch(event)}
        className="search-form"
      >
        <input
          type="text"
          className="input-search"
          placeholder="Search for the movie..."
          onChange={(event) =>
            dispatch({
              type: ACTION_TYPES.TYPE_SEARCH,
              value: event.target.value,
            })
          }
        />
        {state.loading ? (
          <DonutLargeIcon />
        ) : state.error ? (
          <div>Some error occured</div>
        ) : state.searchedMovieName ? (
          <MoviesList movies={state.moviesList} />
        ) : null}
      </form>
    </div>
  );
};

export default App;
