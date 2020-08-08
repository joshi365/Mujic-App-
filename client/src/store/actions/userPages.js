import axios from "axios";
import {
  LOAD_PROFILE_DATA,
  SET_LOADER,
  REMOVE_LOADER,
  GET_ALL_MUSIC,
} from "../types";
import { notifyError } from "../toastNotification";

//Loading User Data
export const userData = () => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.get("/api/profile").then((res) => {
      if (res) {
        dispatch({
          type: REMOVE_LOADER,
        });
        dispatch({
          type: LOAD_PROFILE_DATA,
          payload: res.data,
        });
      }
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: REMOVE_LOADER,
    });

    const mesaage = "error";
    notifyError(mesaage);
  }
};

//Sending User Data For First Time
export const postUserData = (data, history) => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.post("/api/profile", data).then((res) => {
      console.log(res, "checking");

      if (res) {
        history.push({
          pathname: "/profile",
        });
        dispatch(showAllMusic());

        setTimeout(() => {
          window.location.reload();
          setTimeout(() => {
            dispatch({
              type: REMOVE_LOADER,
            });
          }, 500);
        }, 300);
      }
    });
  } catch (error) {
    dispatch({
      type: REMOVE_LOADER,
    });
    const mesaage = error.response.data;
    notifyError(mesaage);
  }
};

//Adding to music List

export const addMusic = (data) => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.post("/api/music", data).then((res) => {
      if (res) {
        setTimeout(() => {
          window.location.reload();
          setTimeout(() => {
            dispatch({
              type: REMOVE_LOADER,
            });
          }, 200);
        }, 100);
      }
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REMOVE_LOADER,
    });
  }
};

//Shows List of all music

export const showAllMusic = (history) => async (dispatch) => {
  try {
    await axios.get("/api/music").then((res) => {
      // console.log(res);
      if (res) {
        dispatch({
          type: GET_ALL_MUSIC,
          payload: res.data,
        });
      }
    });
  } catch (error) {
    console.log(error);
    history.push({
      pathname: "/error",
    });
  }
};

//Edit music data

export const editSong = (data, history) => async (dispatch) => {
  dispatch({
    type: SET_LOADER,
  });
  try {
    await axios.patch("/api/music", data).then((res) => {
      // console.log(res, "edit music response");
      if (res) {
        setTimeout(() => {
          window.location.reload();
          // const mesaage = "Sucess";
          // notify(mesaage);
          setTimeout(() => {
            dispatch({
              type: REMOVE_LOADER,
            });
          }, 400);
        }, 300);
      }
    });
  } catch (error) {
    console.log(error, "edit song error");
    dispatch({
      type: REMOVE_LOADER,
    });
  }
};

//Delete music

export const deleteSong = (id) => async (dispatch) => {
  if (window.confirm("Are you sure, it can't be undone")) {
    try {
      dispatch({ type: SET_LOADER });
      await axios.delete(`/api/music/${id}`).then((res) => {
        if (res) {
          setTimeout(() => {
            window.location.reload();
            // const mesaage = "Sucess";
            // notify(mesaage);
            setTimeout(() => {
              dispatch({
                type: REMOVE_LOADER,
              });
            }, 400);
          }, 300);
        }
      });
    } catch (error) {
      console.log("errrrrr");
    }
  }
};
