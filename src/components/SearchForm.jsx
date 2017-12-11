import React from "react";
import { connect } from "react-redux";
import { Input, Button } from "antd";

import { getMovies } from "../actions/MoviesAction";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    let request = event.target.search_input.value;
    this.props.getMovies(request, this.props.apiKey);
  }
  render() {
    return (
      <form className="search" onSubmit={this.submitHandler}>
        <Input id="search_input" className="search_input" />
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
