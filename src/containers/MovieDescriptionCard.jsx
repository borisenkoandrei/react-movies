import React from "react";

import { connect } from "react-redux";
import { Button } from "antd";

import Actors from "../components/DescriptionCard/Actors";
import Awards from "../components/DescriptionCard/Awards";
import BoxOffice from "../components/DescriptionCard/BoxOffice";
import Country from "../components/DescriptionCard/Country";
import Director from "../components/DescriptionCard/Director";
import DVD from "../components/DescriptionCard/DVD";
import Genre from "../components/DescriptionCard/Genre";
import ImdbRating from "../components/DescriptionCard/imdbRating";
import ImdbVotes from "../components/DescriptionCard/imdbVotes";
import Language from "../components/DescriptionCard/Language";
import Metascore from "../components/DescriptionCard/Metascore";
import Plot from "../components/DescriptionCard/Plot";
import Poster from "../components/DescriptionCard/Poster";
import Production from "../components/DescriptionCard/Production";
import Rated from "../components/DescriptionCard/Rated";
import Ratings from "../components/DescriptionCard/Ratings";
import Released from "../components/DescriptionCard/Released";
import Runtime from "../components/DescriptionCard/Runtime";
import Title from "../components/DescriptionCard/Title";
import Type from "../components/DescriptionCard/Type";
import Website from "../components/DescriptionCard/Website";
import Writer from "../components/DescriptionCard/Writer";
import Year from "../components/DescriptionCard/Year";

class MovieDescription extends React.Component {
  render() {
    if (this.props.requesting) {
      return <div>Загрузка</div>;
    }
    return (
      <div className="movie-description">
        <div className="movie-description_header">
          <Title title={this.props.description.Title} />
          <Button onClick={this.props.close}>Закрыть</Button>
        </div>
        <div className="movie-description_content">
          <div className="movie-description_poster">
            <Poster poster={this.props.description.Poster} />
          </div>
          <div className="movie-description_description">
            <Actors actors={this.props.description.Actors} />
            <Awards awards={this.props.description.Awards} />
            <BoxOffice boxoffice={this.props.description.BoxOffice} />
            <Country country={this.props.description.Country} />
            <Director director={this.props.description.Director} />
            <DVD dvd={this.props.description.DVD} />
            <Genre genre={this.props.description.Genre} />
            <ImdbRating imdbRating={this.props.description.imdbRating} />
            <ImdbVotes imdbVotes={this.props.description.imdbVotes} />
            <Language language={this.props.description.Language} />
            <Metascore metascore={this.props.description.Metascore} />
            <Plot plot={this.props.description.Plot} />
            <Production production={this.props.description.Production} />
            <Rated rated={this.props.description.Rated} />
            <Ratings ratings={this.props.description.Ratings} />
            <Released released={this.props.description.Released} />
            <Runtime runtime={this.props.description.Runtime} />
            <Type type={this.props.description.Type} />
            <Website website={this.props.description.Website} />
            <Writer writer={this.props.description.Writer} />
            <Year year={this.props.description.Year} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    description: state.description.description,
    requesting: state.description.requesting,
    error: state.description.error
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     getDescription: (apiKey, movieId) =>
//       dispatch(getDescription(apiKey, movieId))
//   };
// };

export default connect(mapStateToProps, null)(MovieDescription);
