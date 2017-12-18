import React from "react";

import { getMovies, changeType, changeYear } from "../actions/MoviesAction";

import { connect } from "react-redux";
import { Input, Button, Select, DatePicker } from "antd";
const Option = Select.Option;
const { MonthPicker } = DatePicker;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changeYearHandler = this.changeYearHandler.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  submitHandler(event) {
    event.preventDefault();

    let request = event.target.search_input.value;
    this.props.getMovies(
      request,
      this.props.apiKey,
      this.props.type,
      this.props.year,
      this.props.currentPage
    );
  }

  changeTypeHandler(value) {
    this.props.changeType(value);
  }

  changeYearHandler(date) {
    if (date) {
      date = date.year();
    } else {
      date = "";
    }
    this.props.changeYear(date);
  }

  render() {
    return (
      <form className="search" onSubmit={this.submitHandler}>
        <Input id="search_input" className="search_input" />
        <Select
          id="type_input"
          onChange={this.changeTypeHandler}
          defaultValue="All"
          style={{ width: 120 }}
        >
          <Option value="">All</Option>
          <Option value="movie">Movie</Option>
          <Option value="series">Series</Option>
          <Option value="episode">Episode</Option>
        </Select>
        <MonthPicker format="YYYY" onChange={this.changeYearHandler} />

        <Button className="search_submite" htmlType="submit">
          Поиск
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiKey: state.settings.apiKey,
    year: state.movie.year,
    type: state.movie.type,
    currentPage: state.movie.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (request, apiKey, type, year) =>
      dispatch(getMovies(request, apiKey, type, year)),
    changeType: type => dispatch(changeType(type)),
    changeYear: year => dispatch(changeYear(year))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
