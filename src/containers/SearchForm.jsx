import React from "react";

import { getMovies } from "../actions/MoviesAction";

import { connect } from "react-redux";
import { Input, Button, Select } from "antd";
const Option = Select.Option;

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeTypeHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let request = event.target.search_input.value;
    this.props.getMovies(request, this.props.apiKey);
    console.log(this.state.type);
  }

  changeTypeHandler(value) {
    this.setState({ type: value });
  }

  render() {
    return (
      <form className="search" onSubmit={this.submitHandler}>
        <Input id="search_input" className="search_input" />
        <Select
          id="type_input"
          defaultValue="All"
          style={{ width: 120 }}
          onChange={this.changeTypeHandler}
        >
          <Option value="">All</Option>
          <Option value="movie">Movie</Option>
          <Option value="series">Series</Option>
          <Option value="episode">Episode</Option>
        </Select>

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
    getMovies: (request, apiKey) => dispatch(getMovies(request, apiKey))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
