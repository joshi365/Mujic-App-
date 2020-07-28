import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../store/actions/auth";
import Loader from "../Components/Loader";
import Proptypes from "prop-types";
import LoginForm from "../Components/loginComponets/LoginForm";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      password: "",
      loading: false,
    };
  }

  static getDerivedStateFromProps(nextprops, nextstate) {
    if (nextprops.loading !== nextstate.loading) {
      return {
        loading: nextprops.loading,
      };
    }
    return null;
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    var numbers = /^[0-9]+$/;
    e.preventDefault();
    if (this.state.number.length !== 10) {
      alert("number must be 10 digit");
    } else if (this.state.number.match(numbers)) {
      const data = {
        number: this.state.number,
        password: this.state.password,
      };
      this.props.signIn(data, this.props.history);
    } else alert("Please enter a valid number");
  };
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <Loader message="Logging In Please Wait ......" />
        ) : (
          <LoginForm
            inputHandler={this.inputHandler}
            onSubmitHandler={this.onSubmitHandler}
            mobile={this.state.mobile}
            password={this.state.password}
          />
        )}
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  signIn: Proptypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.loader.loading,
});

export default connect(mapStateToProps, { signIn })(withRouter(Login));
