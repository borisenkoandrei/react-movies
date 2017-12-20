import React from "react";
import { Button } from "antd";

import Poster from "./Poster";
import Title from "./Title";
import Year from "./Year";
import Type from "./MovieType";
import Modal from "../Modal/Modal";
import MovieDescription from "../../containers/MovieDescriptionCard";

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  openModal() {
    this.props.getDescription(this.props.apiKey, this.props.id);
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  addToFavorite() {
    this.props.addToFavorite(this.props.id, this.props.title, this.props.year);
  }

  render() {
    return (
      <div className="film-card">
        <div className="film-card_header">
          <Title title={this.props.title} />
          <Button onClick={this.addToFavorite}>Добавить</Button>
        </div>
        <div className="film-card_poster">
          <Poster poster={this.props.poster} title={this.props.title} />
        </div>
        <div className="film-card_footer">
          <Year year={this.props.year} />
          <Type type={this.props.type} />
          <Button onClick={this.openModal}>Подробне</Button>
        </div>
        <Modal isOpen={this.state.modalIsOpen}>
          <MovieDescription
            apiKey={this.props.apiKey}
            close={this.closeModal}
          />
        </Modal>
      </div>
    );
  }
}

export default MovieCard;
