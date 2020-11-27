import React, { useReducer, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Movie from "./Movie";
import Search from "./Search";

type Error = string | null;

type State = {
  loading: boolean;
  movies: [];
  errorMessage: Error;
};

type Action =
  | { type: "SEARCH_MOVIES_REQUEST" }
  | { type: "SEARCH_MOVIES_SUCCESS"; payload: [] }
  | { type: "SEARCH_MOVIES_FAILURE"; error: string };

type MoviesData = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload,
      };
    case "SEARCH_MOVIES_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    movies: [],
    errorMessage: null,
  });

  useEffect(() => {
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        dispatch({
          type: "SEARCH_MOVIES_SUCCESS",
          payload: jsonResponse.Search,
        });
      });
  }, []);

  const search = (searchValue: string) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST",
    });

    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search,
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error,
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  return (
    <div className="App">
      <Header text="HOOKED" />
      <Search search={search} />
      <p className="App-intro">Sharing a few of our favourite movies</p>
      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading... </span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies?.map((movie: MoviesData, index: number) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
