import {
  SIGN_IN,
  SIGN_OUT,
  CHECK_API_KEY_REQUEST,
  CHECK_API_KEY_SUCCESS,
  CHECK_API_KEY_FAILURE
} from "../const/const";

const initialState = {
  apiKey: "",
  validApiKey: false,
  requestingApiKey: false,
  login: false,
  errorMessage: ""
};

export default function settings(state = initialState, action) {
  switch (action.type) {
    case CHECK_API_KEY_REQUEST:
      return Object.assign({}, state, { requestingApiKey: true });
    case CHECK_API_KEY_SUCCESS:
      return Object.assign(
        {},
        state,
        { apiKey: action.apiKey },
        { login: true },
        { requestingApiKey: false },
        { validApiKey: true },
        { errorMessage: "" }
      );
    case CHECK_API_KEY_FAILURE:
      return Object.assign({}, state, { errorMessage: action.error });
    case SIGN_IN:
      return Object.assign({}, state, {
        login: true,
        validApiKey: true
      });
    case SIGN_OUT:
      return Object.assign({}, state, {
        login: false,
        validApiKey: false,
        apiKey: ""
      });
    default:
      return state;
  }
}
