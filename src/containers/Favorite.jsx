import React from "react";
import { connect } from "react-redux";

import { getDescriptionRequest } from "../actions/MovieDescriptionAction";
import { deleteFromFavorite } from "../actions/FavoriteAction";

import Modal from "../components/Modal/Modal";
import MovieDescription from "../containers/MovieDescriptionCard";
import FavoriteItem from "../components/FavoriteItem/FavoriteItem";

class FavoriteList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(movieId) {
    this.props.getDescription(this.props.apiKey, movieId);
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    if (this.props.favorite.length === 0) {
      return <div>Пусто</div>;
    }
    return (
      <div>
        {this.props.favorite.map(item => (
          <FavoriteItem
            key={item.movieId}
            title={item.movieTitle}
            year={item.movieYear}
            id={item.movieId}
            deleteItem={this.props.deleteFromFavorite}
            getDescription={this.openModal}
          />
        ))}
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

const mapStateToProps = state => {
  return {
    apiKey: state.settings.apiKey,
    favorite: state.favorite
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDescription: (apiKey, movieId) =>
      dispatch(getDescriptionRequest(apiKey, movieId)),
    deleteFromFavorite: movieId => dispatch(deleteFromFavorite(movieId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteList);
