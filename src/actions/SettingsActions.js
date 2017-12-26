import {
  SIGN_IN,
  SIGN_OUT,
  CHECK_API_KEY,
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

export function checkApiKey(apiKey) {
  return {
    type: CHECK_API_KEY,
    apiKey
  };
}

export function checkApiKeyRequest() {
  return {
    type: CHECK_API_KEY_REQUEST
  };
}

export function checkApiKeySuccess(apiKey) {
  return {
    type: CHECK_API_KEY_SUCCESS,
    apiKey
  };
}

export function checkApiKeyFailure(error) {
  return {
    type: CHECK_API_KEY_FAILURE,
    error
  };
}
