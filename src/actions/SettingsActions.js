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

function checkApiKeyFailure(error) {
  return {
    type: CHECK_API_KEY_FAILURE,
    error
  };
}

export function checkApiKey(apiKey) {
  return function(dispatch) {
    dispatch(checkApiKeyRequest());
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=1`)
      .then(function(response) {
        dispatch(checkApiKeyRequest());
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(function(response) {
        dispatch(checkApiKeySuccess(apiKey));
      })
      .catch(function(error) {
        dispatch(checkApiKeyFailure(error.message));
      });
  };
}
