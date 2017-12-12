import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from "../const/const";

function getMoviesRequest(request) {
  return {
    type: GET_MOVIES_REQUEST,
    request
  };
}

function getMoviesSuccess(currentPage, totalPages, movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    currentPage,
    totalPages,
    movies
  };
}

function getMoviesFailure(error) {
  return {
    type: GET_MOVIES_FAILURE,
    error
  };
}

export function getMovies(request, apiKey, page = 1) {
  return function(dispatch) {
    dispatch(getMoviesRequest(request));
    return fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${request}&page=${page}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.Error) {
          throw new Error(response.Error);
        }
        dispatch(
          getMoviesSuccess(page, response.totalResults, response.Search)
        );
      })
      .catch(function(error) {
        console.log(error);
        dispatch(getMoviesFailure(error.message));
      });
  };
}
