import {
  GET_MOVIES,
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  CHANGE_CURRENT_PAGE,
  CHANGE_TYPE,
  CHANGE_YEAR
} from "../const/const";

export function getMovies({ request, apiKey, movieType, year, page }) {
  return {
    type: GET_MOVIES,
    request,
    apiKey,
    movieType,
    year,
    page
  };
}

export function getMoviesRequest() {
  return {
    type: GET_MOVIES_REQUEST
  };
}

export function getMoviesSuccess(currentPage, totalPages, movies) {
  return {
    type: GET_MOVIES_SUCCESS,
    currentPage,
    totalPages: Math.ceil(totalPages / 10),
    movies
  };
}

export function getMoviesFailure(error) {
  return {
    type: GET_MOVIES_FAILURE,
    error
  };
}

export function changeCurrentPage(page) {
  return {
    type: CHANGE_CURRENT_PAGE,
    page
  };
}

export function changeType(movieType) {
  return {
    type: CHANGE_TYPE,
    movieType
  };
}

export function changeYear(year) {
  return {
    type: CHANGE_YEAR,
    year
  };
}
