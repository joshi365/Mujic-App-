import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import errorReducer from "./errorReducer";
import loader from "./loader";
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import music from "./music";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loader"],
};

const rootReducer = combineReducers({
  errorReducer,
  loader,
  authReducer,
  profileReducer,
  music,
});

export default persistReducer(persistConfig, rootReducer);
