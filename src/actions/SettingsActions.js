import { SAVE_API_KEY } from "../const/const";

export function saveApiKey(apiKey) {
  return {
    type: SAVE_API_KEY,
    apiKey
  };
}
