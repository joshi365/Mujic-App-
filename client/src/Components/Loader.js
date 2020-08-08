import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        className="sweet-loading"
      >
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
        <h1 className="mid-text">{this.props.message}</h1>
      </div>
    );
  }
}
