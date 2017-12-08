import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from "../const/const";

function getMoviesRequest() {
  return {
    type: GET_MOVIES_REQUEST
  };
}

function getMoviesSuccess() {}

function getMoviesFailure() {}

export function getMovies(request, apiKey) {
  return function(dispatch) {
    dispatch(getMoviesRequest());
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${request}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(movies) {
        console.log(movies);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}
