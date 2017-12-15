import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  CHANGE_CURRENT_PAGE,
  CHANGE_TYPE,
  CHANGE_YEAR
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
    totalPages: Math.ceil(totalPages / 10),
    movies
  };
}

function getMoviesFailure(error) {
  return {
    type: GET_MOVIES_FAILURE,
    error
  };
}

export function getMovies(request, apiKey, type, year, page = 1) {
  return function(dispatch) {
    dispatch(getMoviesRequest(request));
    return fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${request}&page=${
        page
      }&type=${type}&y=${year}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.Error) {
          throw new Error(response.Error);
        }
        dispatch(
          getMoviesSuccess(page, +response.totalResults, response.Search)
        );
      })
      .catch(function(error) {
        console.log(error);
        dispatch(getMoviesFailure(error.message));
      });
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
