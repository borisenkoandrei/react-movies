import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from "../const/const";

const initialState = {
  searchRequest: "",
  currentPage: 1,
  totalPages: "",
  moviesIsFetching: false,
  error: "",
  movies: []
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES_REQUEST:
      return Object.assign(
        {},
        state,
        { searchRequest: action.request },
        { moviesIsFetching: true }
      );

    case GET_MOVIES_SUCCESS:
      return Object.assign(
        {},
        state,
        { movies: action.movies },
        { currentPage: action.currentPage },
        { totalPages: action.totalPages },
        { moviesIsFetching: false },
        { error: "" }
      );
    case GET_MOVIES_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        currentPage: "",
        totalPages: "",
        movies: []
      });
    default:
      return state;
  }
}

export default moviesReducer;
