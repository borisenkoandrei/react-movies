import React from "react";
import { connect } from "react-redux";

import { Button } from "antd";

import { changeCurrentPage, getMovies } from "../../actions/MoviesAction";

class PagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.prevPage = this.prevPage.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies(page) {
    this.props.getMovies(
      this.props.request,
      this.props.apiKey,
      this.props.type,
      this.props.year,
      page
    );
  }

  prevPage() {
    if (this.props.currentPage - 1 < 1) {
      this.props.changeCurrentPage(1);
    } else {
      this.getMovies(this.props.currentPage - 1);
    }
  }

  nextPage() {
    if (!this.props.totalPage) {
      this.props.changeCurrentPage(1);
    } else if (this.props.currentPage + 1 > this.props.totalPage) {
      this.getMovies(this.props.totalPage);
    } else {
      this.getMovies(this.props.currentPage + 1);
    }
  }

  render() {
    return (
      <div className="page-picker">
        <Button onClick={this.prevPage}>Prev</Button>
        <Button onClick={this.nextPage}>Next</Button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    request: state.movie.searchRequest,
    apiKey: state.settings.apiKey,
    type: state.movie.type,
    year: state.movie.year,
    currentPage: state.movie.currentPage,
    totalPage: state.movie.totalPages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentPage: page => dispatch(changeCurrentPage(page)),
    getMovies: (request, apiKey, type, year, page) =>
      dispatch(getMovies(request, apiKey, type, year, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePicker);
