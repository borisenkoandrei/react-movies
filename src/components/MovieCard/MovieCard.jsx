import React from "react";
import { Button } from "antd";

import Poster from "./Poster";
import Title from "./Title";
import Year from "./Year";
import Type from "./MovieType";
import Modal from "../Modal/Modal";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ modalIsOpen: true });
    this.props.getDescription(this.props.apiKey, this.props.id);
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
          <Button onClick={this.handleClick}>Подробне</Button>
        </div>
        <Modal isOpen={this.state.modalIsOpen}>
          <div />
        </Modal>
      </div>
    );
  }
}

export default MovieCard;
