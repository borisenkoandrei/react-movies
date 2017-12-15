import React from "react";
import { connect } from "react-redux";

import MovieCard from "../components/MovieCard/MovieCard";

import { getDescription } from "../actions/MovieDescriptionAction";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "card"
    };
  }

  render() {
    let getDescription = this.props.getDescription;
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
    getDescription: (apiKey, id) => dispatch(getDescription(apiKey, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
