import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from "../const/const";

export function addToFavorite(movieId, movieTitle, movieYear) {
  return {
    type: ADD_TO_FAVORITE,
    movieId,
    movieTitle,
    movieYear
  };
}

export function deleteFromFavorite(movieId) {
  return {
    type: DELETE_FROM_FAVORITE,
    movieId
  };
}
