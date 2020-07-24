import {
  SET_LOADER,
  SHOW_SUBMIT,
  REGISTRATION_FORM,
  SHOW_SUBMIT_FALSE,
  REMOVE_LOADER,
} from "../types";

const initialState = {
  loading: false,
  show: false,
  register: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADER:
      return {
        loading: true,
      };
    case REMOVE_LOADER:
      return {
        loading: false,
      };
    //DONT REUSE THESE
    case SHOW_SUBMIT:
      return {
        show: true,
        loading: false,
      };
    case SHOW_SUBMIT_FALSE:
      return {
        show: false,
      };
    case REGISTRATION_FORM:
      return {
        register: true,
        loading: false,
      };
    default:
      return state;
  }
}
