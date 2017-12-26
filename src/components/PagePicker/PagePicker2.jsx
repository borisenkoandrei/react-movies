import React from "react";

import { connect } from "react-redux";
import { Pagination } from "antd";

import { getMoviesRequest } from "../../actions/MoviesAction";

class PagePicker2 extends React.Component {
  constructor(props) {
    super(props);

    this.getMovies = this.getMovies.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
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

  changeHandler(page) {
    console.log(page);
    this.getMovies(page);
  }

  render() {
    if (!this.props.totalPage || this.props.totalPage === 1) {
      return null;
    }

    return (
      <div className="pagination">
        <Pagination
          showQuickJumper
          defaultPageSize={1}
          current={+this.props.currentPage}
          total={+this.props.totalPage}
          onChange={this.changeHandler}
        />
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
    getMovies: (request, apiKey, type, year, page) =>
      dispatch(getMoviesRequest(request, apiKey, type, year, page))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PagePicker2);
