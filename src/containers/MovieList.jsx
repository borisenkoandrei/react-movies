import React from "react";
import { connect } from "react-redux";

import MovieCard from "../components/MovieCard/MovieCard";

import { getDescription } from "../actions/MovieDescriptionAction";
import { addToFavorite } from "../actions/FavoriteAction";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "card"
    };
  }

  render() {
    let getDescription = this.props.getDescription;
    let addToFavorite = this.props.addToFavorite;
    let apiKey = this.props.apiKey;
    return (
      <div className="film-list">
        {this.props.movies.map(function(movie) {
          return (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              type={movie.Type}
              year={movie.Year}
              id={movie.imdbID}
              apiKey={apiKey}
              getDescription={getDescription}
              addToFavorite={addToFavorite}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiKey: state.settings.apiKey,
    movies: state.movie.movies
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDescription: (apiKey, movieId) =>
      dispatch(getDescription(apiKey, movieId)),
    addToFavorite: (movieId, movieTitle, movieYear) =>
      dispatch(addToFavorite(movieId, movieTitle, movieYear))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
