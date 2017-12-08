import React from "react";
import { Input, Button } from "antd";

function SearchForm({ getMovies, apiKey }) {
  function submitHandler(event) {
    event.preventDefault();
    let request = event.target.search_input.value;
    getMovies(request, apiKey);
  }

  return (
    <form className="search" onSubmit={submitHandler}>
      <Input id="search_input" className="search_input" />
      <Button className="search_submite" htmlType="submit">
        Поиск
      </Button>
    </form>
  );
}

export default SearchForm;
