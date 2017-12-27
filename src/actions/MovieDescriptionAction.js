import {
  GET_DESCRIPTION_REQUEST,
  GET_DESCRIPTION_SUCCESS,
  GET_DESCRIPTION_FAILURE
} from "../const/const";

export function getDescriptionRequest(apiKey, movieId) {
  return {
    type: GET_DESCRIPTION_REQUEST,
    apiKey,
    movieId
  };
}

export function getDescriptionSuccess(response) {
  return {
    type: GET_DESCRIPTION_SUCCESS,
    response
  };
}

export function getDescriptionError(error) {
  return {
    type: GET_DESCRIPTION_FAILURE,
    error
  };
}
