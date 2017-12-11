import { SIGN_IN, SIGN_OUT, CHECK_API_KEY_SUCCESS } from "../const/const";

const initialState = {
  apiKey: "",
  loginStatus: false
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case CHECK_API_KEY_SUCCESS:
      return Object.assign(
        {},
        state,
        { apiKey: action.apiKey },
        { loginStatus: true }
      );
    case SIGN_IN:
      return Object.assign({}, state, { loginStatus: true });
    case SIGN_OUT:
      return Object.assign({}, state, { loginStatus: false });
    default:
      return state;
  }
}
