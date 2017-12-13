import React from "react";
import { Button } from "antd";

import Poster from "./Poster";
import Title from "./Title";
import Year from "./Year";
import Type from "./MovieType";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id
    };
  }

  render() {
    return (
      <div className="film-card">
        <div className="film-card_header">
          <Title title={this.props.title} />
        </div>
        <div className="film-card_poster">
          <Poster poster={this.props.poster} title={this.props.title} />
        </div>
        <div className="film-card_footer">
          <Year year={this.props.year} />
          <Type type={this.props.type} />
          <Button>Подробнее</Button>
        </div>
      </div>
    );
  }
}

export default MovieCard;
