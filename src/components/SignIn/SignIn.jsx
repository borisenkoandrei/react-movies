import React from "react";
import { connect } from "react-redux";

import Modal from "../Modal/Modal";
import { Input, Button } from "antd";

import { signIn, signOut, checkApiKey } from "../../actions/SettingsActions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    if (!localStorage.getItem("API_KEY")) {
      this.openModal();
    } else {
      this.props.checkApiKey(localStorage.getItem("API_KEY"));
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  signIn(event) {
    event.preventDefault();
    localStorage.setItem("API_KEY", event.target.key.value);
    this.props.checkApiKey(event.target.key.value);
    this.closeModal();
  }

  signOut() {
    this.props.signOut();
    localStorage.removeItem("API_KEY");
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.props.loginStatus ? this.signOut : this.openModal}
        >
          {this.props.loginStatus ? "Sign Out" : "Sign In"}
        </Button>
        <Modal isOpen={this.state.modalIsOpen}>
          <form className="set-api-key-form" onSubmit={this.signIn}>
            <label htmlFor="api-key">Введите ключ API</label>
            <Input name="key" id="api-key" />
            <Button htmlType="submit">Save</Button>
            <Button onClick={this.closeModal}>Cancel</Button>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    apiKey: state.settings.apiKey,
    loginStatus: state.settings.login
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: () => dispatch(signIn()),
    signOut: () => dispatch(signOut()),
    checkApiKey: apiKey => dispatch(checkApiKey(apiKey))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
