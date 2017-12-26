import React, { Component } from "react";
// CSS
import "./css/App.css";
// ACTION

// COMPONENT
import SignIn from "./components/SignIn/SignIn";
import SearchForm from "./containers/SearchForm";
import MovieList from "./containers/MovieList";
import PagePicker from "./components/PagePicker/PagePicker2";
import Favorite from "./containers/Favorite";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider className="layout_sider">
          <Favorite />
        </Sider>
        <Layout>
          <Header className="layout_header">
            <div className="search-block">
              <SearchForm />
              <SignIn />
            </div>
          </Header>
          <Content>
            <MovieList />
          </Content>
          <Footer>
            <PagePicker />
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
