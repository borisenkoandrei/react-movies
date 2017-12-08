import {
  GET_MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAILURE
} from "../const/const";

const initialState = {
  searchRequest: "",
  currentPage: "",
  totalPages: "",
  moviesIsFetching: false,
  movies: {}
};

function moviesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default moviesReducer;
