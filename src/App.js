import React, { Component } from "react";
import { connect } from "react-redux";
// CSS
import "./css/App.css";
// ACTION
import { saveApiKey } from "./actions/SettingsActions";
import { getMovies } from "./actions/MoviesAction";

// COMPONENT
import Modal from "./components/Modal/Modal";
import SetApiKey from "./components/SetApiKey/SetApiKey";
import SearchForm from "./components/SearchForm";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  componentDidMount() {
    if (!this.props.apiKey) {
      this.setState({ modalIsOpen: true });
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.apiKey) {
      this.setState({ modalIsOpen: false });
    }
  }

  render() {
    return (
      <Layout>
        <Sider className="layout_sider">Sider</Sider>
        <Layout>
          <Header className="layout_header">
            <SearchForm
              getMovies={this.props.getMovies}
              apiKey={this.props.apiKey}
            />
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Modal isOpen={this.state.modalIsOpen}>
          <SetApiKey
            submite={this.props.saveApiKey}
            cancel={this.toggleModal}
          />
        </Modal>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiKey: state.settings.apiKey
  };
};

const mapDispathToProps = dispatch => {
  return {
    saveApiKey: key => {
      dispatch(saveApiKey(key));
    },
    getMovies: (request, apiKey) => dispatch(getMovies(request, apiKey))
  };
};

export default connect(mapStateToProps, mapDispathToProps)(App);
