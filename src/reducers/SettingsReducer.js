import { SAVE_API_KEY } from "../const/const";

const initialState = {
  apiKey: "",
  moviesIsFetching: false
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case SAVE_API_KEY:
      return Object.assign({}, state, { apiKey: action.apiKey });
    default:
      return state;
  }
}
