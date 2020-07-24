import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postUserData } from "../store/actions/userPages";
import Loader from "react-spinners/DotLoader";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instrument: "",
      location: "",
      skills: "",
    };
  }

  onChnangeHnadler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { instrument, location, skills } = this.state;
    const data = {
      instrument: instrument,
      location: location,
      skills: skills,
    };
    this.props.postUserData(data, this.props.history);
  };

  render() {
    const { instrument, location, skills } = this.state;
    return (
      <React.Fragment>
        {/* <!-- Material form register --></React.Fragment> */}
        {this.props.load ? (
          <Loader />
        ) : (
          <React.Fragment>
            <div className="card container p-3 text-center center-div">
              <h5
                style={{ backgroundColor: "black", borderRadius: "20px" }}
                className="card-header mb-5"
              >
                <strong className="normal-text" style={{ color: "white" }}>
                  Profile Setup
                </strong>
              </h5>
              <div className="card-body px-lg-5 pt-0">
                {/* <!-- Form --> */}
                <form
                  onSubmit={this.onSubmitHandler}
                  style={{ color: "#757575" }}
                  action="#!"
                >
                  <div className="md-form">
                    <input
                      value={instrument}
                      type="text"
                      className="col-12 mb-4 input-login"
                      onChange={this.onChnangeHnadler}
                      name="instrument"
                      style={{ width: "60%" }}
                      placeholder="instrument you play"
                    />

                    <input
                      value={location}
                      type="text"
                      className="col-12 mb-4 input-login"
                      onChange={this.onChnangeHnadler}
                      name="location"
                      style={{ width: "60%" }}
                      placeholder="city you live in"
                    />
                    <label
                      style={{ color: "black" }}
                      className="col-12 normal-text"
                    >
                      Other musical skills
                    </label>
                    <input
                      type="text"
                      placeholder="seprated by ,"
                      className="col-12 mb-4 input-login"
                      value={skills}
                      onChange={this.onChnangeHnadler}
                      name="skills"
                      style={{ width: "60%" }}
                    />
                  </div>

                  <h1 className="normal-text mb-2" style={{ color: "black" }}>
                    You can also do this later
                  </h1>

                  {/* <!-- Sign up button --> */}
                  <button className="login-button mt-4" type="submit">
                    Finish
                  </button>
                </form>
                {/* <!-- Form --> */}
              </div>
            </div>
          </React.Fragment>
        )}

        {/* <!-- Material form register --> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  load: state.loader.loading,
});

export default connect(mapStateToProps, { postUserData })(
  withRouter(ProfileForm)
);
