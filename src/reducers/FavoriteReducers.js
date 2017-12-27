import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from "../const/const";
import { contains } from "ramda";

export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      const containsFilm = contains(
        {
          movieId: action.movieId,
          movieTitle: action.movieTitle,
          movieYear: action.movieYear
        },
        state
      );
      if (!containsFilm) {
        return [
          ...state,
          {
            movieId: action.movieId,
            movieTitle: action.movieTitle,
            movieYear: action.movieYear
          }
        ];
      } else {
        return state;
      }

    case DELETE_FROM_FAVORITE:
      return state.filter(function(item) {
        if (item.movieId !== action.movieId) {
          return true;
        } else {
          return false;
        }
      });

    default:
      return state;
  }
}
