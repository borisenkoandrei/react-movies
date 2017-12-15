import {
  GET_DESCRIPTION_REQUEST,
  GET_DESCRIPTION_SUCCESS,
  GET_DESCRIPTION_FAILURE
} from "../const/const";

const initialState = {
  requesting: false,
  error: ""
};

export default function MovieDescription(state = initialState, action) {
  switch (action.type) {
    case GET_DESCRIPTION_REQUEST:
      return Object.assign({}, state, { requesting: true });
    case GET_DESCRIPTION_SUCCESS:
      return Object.assign(
        {},
        state,
        { ...action.response },
        {
          requesting: false
        }
      );
    case GET_DESCRIPTION_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        requesting: false
      });
    default:
      return state;
  }
}
