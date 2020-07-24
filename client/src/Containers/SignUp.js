import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  signUp,
  sendOtp,
  verifyOtp,
  changeNumber,
} from "../store/actions/auth";
import Loader from "../Components/Loader";
import SendOtp from "../Components/signUpComponents/SendOtp";
import VerifyOtp from "../Components/signUpComponents/VerifyOtp";
import SignUpForm from "../Components/signUpComponents/SignUpForm";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      number: "",
      otp: "",
      disable: false,
    };
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  otpSendHandler = (e) => {
    e.preventDefault();
    var numbers = /^[0-9]+$/;
    if (this.state.number.length !== 10) {
      alert("number must be 10 digit");
    } else if (this.state.number.match(numbers)) {
      const data = {
        number: this.state.number,
      };
      this.props.sendOtp(data);
    } else alert("Please enter a valid number 10 digit number");
  };

  onOtpSubmit = (e) => {
    e.preventDefault();

    var numbers = /^[0-9]+$/;
    if (this.state.otp.length !== 5) {
      alert("otp must be a 5 digit number");
    } else if (this.state.otp.match(numbers)) {
      const data = {
        number: localStorage.getItem("number"),
        otp: this.state.otp,
      };
      this.props.verifyOtp(data);
    } else alert("Please enter a valid number 10 digit number");
  };

  changeNumber = (e) => {
    this.props.changeNumber();
  };

  onSignupHandler = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = this.state;

    if (this.state.name.length < 3) {
      alert("name should be atleast 3 chracters");
    } else if (password !== confirmPassword) {
      alert("password dont match");
    } else if (password.length < 6) {
      alert("passwor should be atleast 6 chracter");
    } else {
      const data = {
        password: password,
        email: email,
        name: name,
        number: localStorage.getItem("number"),
      };
      this.props.signUp(data, this.props.history);
    }
  };

  render() {
    const { name, number, email, password, confirmPassword, otp } = this.state;
    var display; //To display content

    /*************************************** SEND OTP TO MOBILE*******************************************/

    if (this.props.show === false) {
      display = (
        <SendOtp
          number={number}
          inputHandler={this.inputHandler}
          otpSendHandler={this.otpSendHandler}
        />
      );
    }

    /*************************************** VERIFY OTP THROUGH SERVER *******************************************/

    if (this.props.show === true) {
      display = (
        <VerifyOtp
          inputHandler={this.inputHandler}
          otp={otp}
          onOtpSubmit={this.onOtpSubmit}
          changeNumber={this.changeNumber}
        />
      );
    }

    /*************************************** SIGN_UP PROCESS *******************************************/

    if (this.props.register === true) {
      display = (
        <SignUpForm
          onSignupHandler={this.onSignupHandler}
          inputHandler={this.inputHandler}
          name={name}
          email={email}
          password={password}
          confirmPassword={confirmPassword}
        />
      );
    }

    return (
      <React.Fragment>
        {this.props.loading ? (
          <div style={{ height: "100%" }}>
            <Loader message="Creating User Please Waiit" />
          </div>
        ) : (
          display
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.loader.loading,
  register: state.loader.register,
  show: state.loader.show,
});

export default connect(mapStateToProps, {
  signUp,
  sendOtp,
  verifyOtp,
  changeNumber,
})(withRouter(SignUp));
