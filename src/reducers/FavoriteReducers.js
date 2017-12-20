import { ADD_TO_FAVORITE, DELETE_FROM_FAVORITE } from "../const/const";

export default function favoriteReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return [
        ...state,
        {
          movieId: action.movieId,
          movieTitle: action.movieTitle,
          movieYear: action.movieYear
        }
      ];
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
