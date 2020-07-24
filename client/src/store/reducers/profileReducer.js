import { LOAD_PROFILE_DATA } from "../types";

const initialState = {
  profileData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload,
      };
    default:
      return state;
  }
}
