import { combineReducers } from "redux";

import SettingsReduser from "./SettingsReducer";
import MovieReducer from "./MoviesRedcers";
import DescriptionReduser from "./MovieDescription";
import FavoriteReduser from "./FavoriteReducers";

export default combineReducers({
  settings: SettingsReduser,
  movie: MovieReducer,
  description: DescriptionReduser,
  favorite: FavoriteReduser
});
