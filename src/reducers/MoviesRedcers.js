import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE,
  CHANGE_CURRENT_PAGE,
  CHANGE_TYPE,
  CHANGE_YEAR
} from "../const/const";

const initialState = {
  searchRequest: "",
  currentPage: "",
  totalPages: "",
  moviesIsFetching: false,
  error: "",
  movies: [],
  type: "",
  year: ""
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
      return Object.assign({}, initialState, {
        error: action.error
      });
    case CHANGE_CURRENT_PAGE:
      return Object.assign({}, state, { currentPage: action.page });
    case CHANGE_TYPE:
      return Object.assign({}, state, { type: action.movieType });
    case CHANGE_YEAR:
      return Object.assign({}, state, { year: action.year });
    default:
      return state;
  }
}

export default moviesReducer;
