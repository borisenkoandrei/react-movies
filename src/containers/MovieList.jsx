import React from "react";
import { connect } from "react-redux";

import MovieCard from "../components/MovieCard/MovieCard";

import { getDescriptionRequest } from "../actions/MovieDescriptionAction";
import { addToFavorite } from "../actions/FavoriteAction";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "card"
    };
  }

  render() {
    let getDescription = this.props.getDescriptionRequest;
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
    getDescriptionRequest: (apiKey, movieId) =>
      dispatch(getDescriptionRequest(apiKey, movieId)),
    addToFavorite: (movieId, movieTitle, movieYear) =>
      dispatch(addToFavorite(movieId, movieTitle, movieYear))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
