import { GET_ALL_MUSIC } from "../types";

const initialState = {
  allMusic: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_MUSIC:
      return {
        ...state,
        allMusic: action.payload,
      };
    default:
      return state;
  }
}
