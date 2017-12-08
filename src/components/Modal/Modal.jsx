import React from "react";
import ReactDOM from "react-dom";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.mountTo = document.querySelector("#modal");
    this.isOpen = this.props.isOpen;
  }

  wrapModal() {
    return <div className="modal">{this.props.children}</div>;
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }
    return ReactDOM.createPortal(this.wrapModal(), this.mountTo);
  }
}

export default Modal;
