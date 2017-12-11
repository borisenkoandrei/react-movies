import React, { Component } from "react";
// CSS
import "./css/App.css";
// ACTION

// COMPONENT
import SignIn from "./components/SignIn/SignIn";
import SearchForm from "./components/SearchForm";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Sider className="layout_sider">Sider</Sider>
        <Layout>
          <Header className="layout_header">
            <SearchForm />
            <SignIn />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
