import React, { Component } from "react";
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: inline-flex;
  position: relative;
  margin-top: 20%;
`;

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          css={override}
          size={130}
          color={"#f20505"}
          loading={this.state.loading}
        />
        <h1 className="mid-text">{this.props.message}</h1>
      </div>
    );
  }
}
