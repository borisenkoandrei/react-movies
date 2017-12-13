import React from "react";

import { getMovies } from "../actions/MoviesAction";

import { connect } from "react-redux";
import { Input, Button, Select, DatePicker } from "antd";
const Option = Select.Option;
const { MonthPicker } = DatePicker;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      year: "",
      searchRequest: "",
      currentPage: 1,
      totalPages: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeTypeHandler = this.changeTypeHandler.bind(this);
    this.changeYearHandler = this.changeYearHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let request = event.target.search_input.value;
    this.props.getMovies(
      request,
      this.props.apiKey,
      this.state.type,
      this.state.year
    );
  }

  changeTypeHandler(value) {
    this.setState({ type: value });
  }

  changeYearHandler(date) {
    if (date) {
      date = date.year();
    } else {
      date = "";
    }
    this.setState({ year: date });
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
    apiKey: state.settings.apiKey
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMovies: (request, apiKey, type, year) =>
      dispatch(getMovies(request, apiKey, type, year))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
