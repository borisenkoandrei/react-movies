import React from "react";
import { connect } from "react-redux";

import MovieCard from "../components/MovieCard/MovieCard";

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "card"
    };
  }

  render() {
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
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movie.movies
  };
};

export default connect(mapStateToProps)(MovieList);
