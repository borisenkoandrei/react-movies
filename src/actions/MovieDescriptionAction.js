import {
  GET_DESCRIPTION_REQUEST,
  GET_DESCRIPTION_SUCCESS,
  GET_DESCRIPTION_FAILURE
} from "../const/const";

function getDescriptionRequest() {
  return {
    type: GET_DESCRIPTION_REQUEST
  };
}

function getDescriptionSuccess(response) {
  return {
    type: GET_DESCRIPTION_SUCCESS,
    response
  };
}

function getDescriptionError(error) {
  return {
    type: GET_DESCRIPTION_FAILURE,
    error
  };
}

export function getDescription(apiKey, movieId) {
  return function(dispatch) {
    dispatch(getDescriptionRequest());
    return fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${movieId}&plot=full`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.Error) {
          dispatch(getDescriptionError(response.Error));
        } else {
          dispatch(getDescriptionSuccess(response));
        }
      })
      .catch(function(error) {
        dispatch(getDescriptionError(error));
      });
  };
}
