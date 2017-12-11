import {
  SIGN_IN,
  SIGN_OUT,
  CHECK_API_KEY_REQUEST,
  CHECK_API_KEY_SUCCESS,
  CHECK_API_KEY_FAILURE
} from "../const/const";

export function signIn() {
  return {
    type: SIGN_IN
  };
}

export function signOut() {
  return {
    type: SIGN_OUT
  };
}

function checkApiKeyRequest() {
  return {
    type: CHECK_API_KEY_REQUEST
  };
}

function checkApiKeySuccess(apiKey) {
  return {
    type: CHECK_API_KEY_SUCCESS,
    apiKey
  };
}

function checkApiKeyFailure() {
  return {
    type: CHECK_API_KEY_FAILURE
  };
}

export function checkApiKey(apiKey) {
  return function(dispatch) {
    dispatch(checkApiKeyRequest());
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=1`)
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        if (response.Error) {
          throw new Error(response.Error);
        }
        dispatch(checkApiKeySuccess(apiKey));
      })
      .catch(function(error) {
        console.log(error);
        dispatch(checkApiKeyFailure(error.message));
      });
  };
}
