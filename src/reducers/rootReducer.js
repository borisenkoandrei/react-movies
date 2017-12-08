import { combineReducers } from "redux";

import SettingsReduser from "./SettingsReducer";
import MovieReducer from "./MoviesRedcers";

export default combineReducers({
  settings: SettingsReduser,
  movie: MovieReducer
});
