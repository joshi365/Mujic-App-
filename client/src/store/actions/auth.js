import axios from "axios";
import {
  SET_LOADER,
  REMOVE_LOADER,
  SET_CURRENT_USER,
  SHOW_SUBMIT,
  SHOW_SUBMIT_FALSE,
  REGISTRATION_FORM,
} from "../types";
import { notify, notifyError } from "../toastNotification";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthtoken";

/*********************
 * SEND OTP
 **********************/

export const sendOtp = (data) => async (dispatch) => {
  // console.log(data);
  const mesaage = "sending otp please wait.....";
  notify(mesaage);
  dispatch({
    type: SET_LOADER,
  });

  try {
    await axios.post("/api/user/otp", data).then((res) => {
      if (res) {
        //STORING NUMBER SO WE DONT LOOSE NUMBER AFTER REFRESH
        var number = data.number;
        localStorage.setItem("number", number);

        const mesaage = "otp sended sucessfully";
        notify(mesaage);

        dispatch({
          type: REMOVE_LOADER,
        });
        dispatch({
          type: SHOW_SUBMIT,
        });
      }
    });
  } catch (error) {
    //IF NUMBER ALREADY EXIST
    if (error.response.data) {
      const mesaage1 = error.response.data;
      notifyError(mesaage1);
      dispatch({
        type: REMOVE_LOADER,
      });
      dispatch({
        type: SHOW_SUBMIT_FALSE,
      });

      //TWILLIO ERROR
    } else if (error) {
      console.log(error.response);
      const mesaage = error.response.statusText;
      notifyError(mesaage);
      dispatch({
        type: REMOVE_LOADER,
      });
      dispatch({
        type: SHOW_SUBMIT_FALSE,
      });

      //TO CLEAR THE REDUX STATE AT ONCE IF USER WANTS TO REGISTER AGAIN
    }

    // console.log(error.response, "otp");
  }
};

/*********************
 * VERIFY OTP
 **********************/
export const verifyOtp = (data) => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.post("/api/user/verify", data).then((res) => {
      // console.log(res);
      if (res.data === true) {
        const mesaage = "OTP Verified sucess..";
        notify(mesaage);
        dispatch({
          type: REMOVE_LOADER,
        });
        dispatch({
          type: REGISTRATION_FORM,
        });
      }

      if (res.data === false) {
        const mesaage = "OTP Invalid";
        notifyError(mesaage);
        dispatch({
          type: REMOVE_LOADER,
        });
        dispatch({
          type: SHOW_SUBMIT,
        });
      }
    });
  } catch (error) {
    const mesaage = "ERROR Please try again";
    notifyError(mesaage);
    // console.log(error);

    dispatch({
      type: REMOVE_LOADER,
    });
    dispatch({
      type: SHOW_SUBMIT,
    });
  }
};

/*********************
 * CHANGE NUMBER
 *********************/
export const changeNumber = () => async (dispatch) => {
  localStorage.clear();
  setTimeout(() => {
    window.location.reload();
  }, 500);
};

/******************************
 * SIGNUP
 ******************************/

export const signUp = (data, history) => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });

  try {
    await axios.post("/api/user/register", data).then((res) => {
      // console.log(res);
      if (res) {
        dispatch({
          type: REMOVE_LOADER,
        });

        const mesaage = "sucess login to continue";
        const type = "error";
        notify(mesaage, type);
        localStorage.clear();

        dispatch({
          type: SHOW_SUBMIT_FALSE,
        });

        setTimeout(() => {
          history.push({
            pathname: "/",
          });
        }, 500);
      }
    });
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    if (error) {
      const mesaage = error.response;
      notifyError(mesaage);
      dispatch({
        type: REMOVE_LOADER,
      });
      dispatch({
        type: REGISTRATION_FORM,
      });
    }
  }
};

/******************************
 * LOGIN
 ******************************/
export const signIn = (data, history) => async (dispatch) => {
  // console.log(data);
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.post("/api/user/login", data).then((res) => {
      console.log(res.data, "hiiii");
      if (res) {
        dispatch({
          type: REMOVE_LOADER,
        });

        const mesaage = "You are logged in";
        notify(mesaage);

        //Set token to local storage
        localStorage.clear();
        var token = res.data;
        localStorage.setItem("jwtToken", token);

        //sending token to setAuthToken for setting default token
        setAuthToken(token);

        //Decoding Token
        const decoded = jwt_decode(token);

        //Sending decoded to set_current_user
        dispatch(set_current_user(decoded));

        history.push({
          pathname: "/profile",
        });
      }
    });
  } catch (error) {
    if (error) {
      const mesaage = error.res.data;
      notifyError(mesaage);
      dispatch({
        type: REMOVE_LOADER,
      });
      console.log(error);
    }
  }
};

/******************************
 * SET CURRENT USER
 ******************************/

export const set_current_user = (decoded) => async (dispatch) => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded,
  });
};

/******************************
 * LOGOUT
 ******************************/

export const logoutUser = () => async (dispatch) => {
  await localStorage.clear();
  setTimeout(() => {
    window.location.href = "/";
    dispatch(set_current_user({}));
    dispatch({
      type: SHOW_SUBMIT_FALSE,
    });
    window.location.reload();
  }, 300);
};
